var mongoose = require('mongoose');
var User = mongoose.model("User");

// return user from database if authenticated
module.exports.getProfile = function(req, res) {
  console.log('REQUEST:'+req);
  if (!req.payload.username)
      res.status(401).json({"message" : "UnauthorizedError: private profile"});

  User.findOne({username:req.payload.username}, {_id:0, updated:0, hash:0,salt:0}, function (err, user) {
      if (err) return res.status(500).json({"message":"Database Error: there was a internal problem finding the user to the database."});
          res.status(200).json(user);
  });
};

// Update profile
//to-do

// delete profile in the database
module.exports.deleteProfile = function(req, res) {
  if (!req.payload.username)
    res.status(401).json({"message" : "UnauthorizedError: private profile"});
  else {
    User.findOneAndRemove(req.payload.username, function (err, user) {
      if (err) return res.status(500).json({"message":"Database Error: there was a internal problem removing the user in the database."});
        res.status(200).json(user);
    });
  }
};
