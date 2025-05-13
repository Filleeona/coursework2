const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-key.json');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_URL
});

const db = admin.database();
const SERVER_PORT = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        healthy: true
    });
});

app.get('/pets', (req, res) => {
    db.ref('pets').once('value', (snapshot) => {
        const pets = snapshot.val();
        if (pets) {
            res.send(Object.values(pets).map((pet, index) => ({
                ...pet,
                name: pet.name,
                age: pet.age,
                size: pet.size,
                type: pet.type
            })));
        } else {
            res.send([]);
        }
    });
});

// New endpoint to get total donations and happiness percentage
app.get('/api/total-donations', (req, res) => {
    db.ref('donations').once('value', (snapshot) => {
        const donations = snapshot.val() || {};
        const totalDonated = Object.values(donations).reduce((sum, donation) => sum + (donation.amount || 0), 0);
        const DONATION_GOAL = 500;
        const happinessPercentage = Math.min((totalDonated / DONATION_GOAL) * 100, 100);
        res.json({totalDonated, happinessPercentage, donated: totalDonated > 0});
    }, (error) => {
        res.status(500).json({error: error.message});
    });
});

app.get('/donations', (req, res) => {
    db.ref('donations').once('value', (snapshot) => {
        const donations = snapshot.val() || {};
        res.json(Object.values(donations));
    }, (error) => {
        res.status(500).json({error: error.message});
    });
});

// Stripe integration
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post('/api/create-checkout-session', async (req, res) => {
    const {amount} = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Donation',
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:5173/help?success=true',
            cancel_url: 'http://localhost:5173/help?cancel=true',
        });

        res.json({id: session.id});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Handle successful donation and update database
app.post('/api/save-donation', async (req, res) => {
    const {amount} = req.body;
    if (!amount || amount <= 0) {
        return res.status(400).json({error: 'Invalid donation amount'});
    }

    try {
        const newDonation = {
            id: Date.now().toString(),
            amount,
            gift: amount >= 10 ? 'Golden Bone 🦴' : 'Shiny Coin 💰',
            timestamp: new Date().toISOString()
        };
        await db.ref('donations').push(newDonation);
        res.json({success: true});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});