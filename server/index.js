const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-key.json');
const express = require('express');
const cors = require('cors')

require('dotenv').config()

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
    })
})

app.get('/pets', (req, res) => {
    db.ref('pets').once('value', (item) => {
        res.send(item.val().map((pet, index) => ({
            ...pet,
            name: pet.name,
            age: pet.age,
            size: pet.size,
            type: pet.type
        })))
    })
})

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

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`)
})