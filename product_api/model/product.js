var mongoose = require('mongoose');

var productSchema = new mongoose.Schema(
    {
      //product_id: {type:String, index: true, unique: true},
      product_name: {type:String, index: true, unique: true},
      category: {type:String,  required: true},
      price: {type:Number,  required: true},
      quantity: {type:Number,  required: true},
      updated: {type: Date, default: Date.now}
    },
    {
      versionKey: false // omitting version of document
    }
);

productSchema.methods.setPrice = function(price) {
  // logic to ensure precise calculation
   return price;
};

productSchema.methods.getPrice = function(price) {
   // logic to ensure precise calculation
   return this.price;
};

mongoose.model('product', productSchema);
