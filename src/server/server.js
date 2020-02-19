const express = require('express');
const path = require('path');
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');

const server = express();

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, 'build')));
server.use(routes);

server.listen(process.env.PORT || 8000);
