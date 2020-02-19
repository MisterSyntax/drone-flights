const request = require('request-promise-native');

async function getLocation(req, res) {
    const options = {
        body: {
            'droneId': req.query.droneId
        },
        json: true,
        method: 'POST',
        uri: 'http://localhost:8080/GetLocation',
    };
    const getLocationResponse = await request(options);

    res.json(getLocationResponse);
}

module.exports = getLocation;
