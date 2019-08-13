const express = require('express');

const server = express();
const carsRouter = require('./cars-router');
server.use(express.json());


server.use('/cars', carsrouter);

module.exports = server;
