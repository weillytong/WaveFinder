const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');

const port = 8000;

const server = express();

// Apply Middleware
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));

// Serve up static files
server.use(express.static(path.join(__dirname, '../client/dist')));

// Connect to router
server.use('/api', router);

server.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
