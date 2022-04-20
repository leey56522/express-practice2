const request = require('supertest')('https://api.twilio.com/2010-04-01');
const assert = require('chai').assert;
const checkPhoneNum = require('./twilioAPI').checkPhoneNum;
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// tests phone number validating function
describe('function unit test', () => {
    it('returns true if phone number type is number and the length is above 5', () => {
        assert.isTrue(checkPhoneNum(5234234234))
    })

    it('returns false if phone number type is not a number', () => {
        assert.isFalse(checkPhoneNum('5'))
    })

    it('returns false if phone number length is below 5', () => {
        assert.isFalse(checkPhoneNum(5))
    })
})

// tests if twilio api call returns 200
describe('Twilio API', () => {
    describe('GET', () => {
        it('gets code 200', () => {
            return request  
                .get('/Accounts')
                .set("Authorization", "basic " + new Buffer(`${accountSid}:${authToken}`).toString("base64"))
                .expect(200)
        })

        it('returns the correct output')
    })
})