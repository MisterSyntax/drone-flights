const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const enableCORS = require('./enableCORS/enableCORS');
const routes = require('./routes/routes.js');

const server = express();

server.use(enableCORS);
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, 'build')));
server.use(routes);

server.listen(process.env.PORT || 8000);
