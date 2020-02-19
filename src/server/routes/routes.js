const Router = require('express').Router;
const getLocation = require('./getLocation/getLocation.js');
const setLocation = require('./setLocation/setLocation.js');

const routes = Router();

routes.get('/getLocation', getLocation);
routes.post('/setLocation', setLocation);

module.exports = routes;
