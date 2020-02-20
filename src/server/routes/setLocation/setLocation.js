const request = require('request-promise-native');

async function setLocation(req, res) {
    const options = {
        body: {
            ...req.body
        },
        json: true,
        method: 'POST',
        uri: 'http://localhost:8080/SetLocation',
    };
    try{
        await request(options);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = setLocation;
