var mongoose = require('mongoose');
mongoose.connect('mongodb://testdb:27017/retail_db')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

console.log('So far so goooooooooooooooood!!!!!!!!!!!!!!');

require('./user');
