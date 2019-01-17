var mongoose = require('mongoose'); //mongo
mongoose.connect('mongodb://mongo:27017/orderdb')
  .then(() =>  console.log('Succesfully connected to mongodb'))
  .catch((err) => console.error(err));

require('./order');
