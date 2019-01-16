var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema(
    {
      username: {type:String, index: true, unique: true},
      firstname: {type:String, required: true},
      lastname: {type:String,  required: true},
      salt: {type:String,  required: true},
      hash: {type:String,  required: true},
      updated: {type: Date, default: Date.now}
    },
    {
      versionKey: false // omitting version of document
    }
);

userSchema.methods.setPassword = function(password){
  console.log("hashing the password......");
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
  console.log('validate the password.....')
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    username: this.username,
    email: this.email,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET");
};

mongoose.model('User', userSchema);
