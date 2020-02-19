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
    await request(options);

    res.sendStatus(200);
}

module.exports = setLocation;
