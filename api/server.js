const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../config/routes.js');

const server = express();

const corsConfig = {
  credentials: true,
  origin: true,
};

server.use(helmet());
server.use(cors(corsConfig));
server.use(express.json());

configureRoutes(server);

module.exports = server;
