var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model("User");

module.exports.register = function(req, res) {
  User.find({username:req.body.username}, function (err, users) {
    // if user already exist in the database
    if (users.length)
      return res.status(409).json({"message" : "Database error: username "+ req.body.username+" is already exist in the database"});

    // otherwise, proceed with the request to register the user and persist the entity into the database
    var newUser = new User();
    newUser.username = req.body.username;
    newUser.firstname = req.body.firstname;
    newUser.lastname = req.body.lastname;
    newUser.setPassword(req.body.password);
    newUser.save(function(err) {
      if (err) return res.status(500).json({"message":"Database Error: there was a internal problem adding the user to the database."});
      // Generate token auhtorization to the client
      var token;
      token = newUser.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    });
  });
};

module.exports.login = function(req, res) {
  passport.authenticate('local', function(err, user, info){
    // if Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      var token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);
};
