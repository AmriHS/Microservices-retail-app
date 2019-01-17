const express = require('express');
const app = express();
const db = require('./model/db');
const routeAPI = require('./route');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use the API routes when path starts with /api
app.use('/product', routeAPI);

module.exports = app;
