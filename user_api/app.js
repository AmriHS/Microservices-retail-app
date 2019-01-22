var express = require('express');
var app = express();
var cors = require('cors')
var db = require('./model/db');
var router = require('./route');
var passport = require('passport');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Bring in the passport config after model is defined
require('./passport/passport');

// Initialise before using the route middleware
/*var corsOptions = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200
}*/
app.use(cors()) // corsOptions

app.use(passport.initialize());

// Use the API routes when path starts with /api
app.use('/user', router);

module.exports = app;
