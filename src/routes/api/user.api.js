const express = require('express');
const _ = express.Router();
const userController = require('../../controllers/user.controller')

_.route('/create-user').post(userController.createUser);
_.route('/test').get(userController.testRoute);

module.exports = _;