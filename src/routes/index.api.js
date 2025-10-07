const express = require('express');
const _ = express.Router();

_.use('/user', require('./api/user.api'));

module.exports = _;