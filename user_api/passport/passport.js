const passport = require('passport');
const passportJWT = require('passport-jwt');

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;
//const ExtractJWT = passportJWT.ExtractJwt;

const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'username'
  },
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err)
        return done(err);
      // Return if user not found in database
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      // Return if password is wrong
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      // If credentials are correct, return the user object
      return done(null, user);
    });
  }
));

passport.use(new JWTStrategy({
        jwtFromRequest: req => req.cookies.jwt,
        secretOrKey   : 'MY_SECRET'
    },
    function (jwtPayload, done) {
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return User.findOne(jwtPayload.username)
            .then(user => {
                return done(null, user);
            })
            .catch(err => {
                return done(err);
            });
    }
));
