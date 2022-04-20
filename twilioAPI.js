const express = require('express');
const axios = require('axios');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const port = 3000;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const checkPhoneNum = function(phoneNum) {
    if (typeof phoneNum === 'number') {
        if(String(phoneNum).length > 5) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

app.get('/', (req, res) => {
    res.send('This is the landing page!')
})

app.get('/textme', (req, res) => {
    // const phoneNum = req.query.phoneNum;

    // getting the most recent message
    client.messages.list({limit: 5})
               .then(messages => {
                   console.log(messages[0].sid)
                });

    res.send('processing...')
})

app.listen(port, () => console.log(`Listening to port ${port}`));

module.exports = {checkPhoneNum};