const express = require('express')
const serverless = require("serverless-http")
const app = express()
const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.get('/json', (req, res) => {
    res.json({
        'path': "json",
        'author': "Ko Myo"
    })
});

app.use('/', router);
// app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);