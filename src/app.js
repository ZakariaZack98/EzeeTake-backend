const express = require('express');
const app = express();

//* setting up middlewares ==================================
//? JSON Converter
app.use(express.json());
//? URL Encoder
app.use(express.urlencoded({extended: true}))

//* Mounting routes =========================================
app.use('/api/v1/', require('./routes/index.api'));


module.exports = {app};