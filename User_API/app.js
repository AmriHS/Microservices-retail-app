var express = require('express');
var app = express();
var db = require('./model/db');
var routeAPI = require('./route');
var passport = require('passport');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Bring in the passport config after model is defined
require('./passport/passport');

// Initialise passport before using the route middleware
app.use(passport.initialize());

// Use the API routes when path starts with /api
app.use('/user', routeAPI);

module.exports = app;
