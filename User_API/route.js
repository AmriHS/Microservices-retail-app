var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var profileContr = require('./controller/profile');
var authContr = require('./controller/authentication');

// profile
router.get('/getProfile', auth, profileContr.getProfile);
router.delete('/deleteProfile', auth, profileContr.deleteProfile);

// authentication
router.post('/register', authContr.register);
router.post('/login', authContr.login);

module.exports = router;
