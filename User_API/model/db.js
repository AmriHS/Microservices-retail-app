var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/userdb')
  .then(() =>  console.log('Succesfully connected to mongodb'))
  .catch((err) => console.error(err));

require('./user');
