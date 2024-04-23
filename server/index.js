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
    db.ref('pets/').once('value', (item) => {
        res.send(item.val().map((pet, index) => ({
            ...pet,
            name: pet.name ?? "Test name " + (index + 1)
        })));
    })
})

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`)
})

// Used for photo uploading.
// const path = require('path');
// const fs = require('fs');
//
// const directoryPath = path.join(__dirname, 'images');
//
// function base64_encode(file) {
//     const bitmap = fs.readFileSync(file);
//     return new Buffer(bitmap).toString('base64');
// }
//
// fs.readdir(directoryPath, function (err, files) {
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     }
//     files.forEach(function (file, index) {
//         // Do whatever you want to do with the file
//         db.ref(`/pets/${index}`).set({ photo: `data:image/jpeg;base64,${base64_encode(path.join('images', file))}` })
//     });
// });