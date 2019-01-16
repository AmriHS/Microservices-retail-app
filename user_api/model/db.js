var mongoose = require('mongoose'); //mongo
mongoose.connect('mongodb://localhost:27017/userdb')
  .then(() =>  console.log('Succesfully connected to mongodb'))
  .catch((err) => console.error(err));

require('./user');
