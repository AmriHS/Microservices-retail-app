var mongoose = require('mongoose'); //mongo
mongoose.connect('mongodb://localhost:27017/productdb')
  .then(() =>  console.log('Succesfully connected to mongodb'))
  .catch((err) => console.error(err));

require('./product');
