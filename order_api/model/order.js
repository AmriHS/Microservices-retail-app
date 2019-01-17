const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

// initialize autoIncrement
autoIncrement.initialize(mongoose.connection);

var orderSchema = new mongoose.Schema(
    {
      orderId: {type:String, index: true, unique: true},
      buyerId: {type:String, index: true},
      sellerId: {type:String, index: true},
      productId: {type:String, index: true},
      status: {type:String,  required: true},
      purchaseDate: {type:Date, default: Date.now, required: true},
      updated: {type: Date, default: Date.now}
    },
    {
      versionKey: false // omitting version of document
    }
);

// pass autoIncrement to product collection
orderSchema.plugin(autoIncrement.plugin, { model: 'order', field: 'orderId' });

orderSchema.methods.validateOrder = function(order) {
  // logic to be implemented to ensure the validaty of product object values
};

mongoose.model('order', orderSchema);
