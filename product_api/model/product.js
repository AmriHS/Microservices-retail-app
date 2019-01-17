const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

// initialize autoIncrement
autoIncrement.initialize(mongoose.connection);
const productSchema = new mongoose.Schema(
    {
      productId: {type:Number, index: true, unique: true},
      productName: {type:String, index: true, unique: true},
      category: {type:String,  required: true},
      price: {type:Number,  required: true},
      quantity: {type:Number,  required: true},
      updated: {type: Date, default: Date.now}
    },
    {
      versionKey: false // omitting version of document
    }
);

// pass autoIncrement to product collection
productSchema.plugin(autoIncrement.plugin, { model: 'product', field: 'productId' });

productSchema.methods.validateProduct = function(product) {
  // logic to be implemented to ensure the validaty of product object values
};
productSchema.methods.setPrice = function(price) {
  // logic to ensure precise calculation
   return price;
};

productSchema.methods.getPrice = function(price) {
   // logic to ensure precise calculation
   return this.price;
};

mongoose.model('product', productSchema);
