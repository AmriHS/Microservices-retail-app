const express = require('express');
const router = express.Router();
const passport = require('passport');

const profileContr = require('./controller/profile');
const authContr = require('./controller/authentication');

// profile
router.get('/profile', passport.authenticate('jwt', {session: false}), profileContr.getProfile);
router.delete('/profile', passport.authenticate('jwt', {session: false}), profileContr.deleteProfile);

// authentication
router.post('/register', authContr.register);
router.post('/login', authContr.login);

module.exports = router;
