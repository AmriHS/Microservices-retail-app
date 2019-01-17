const mongoose = require("mongoose");
const Product = mongoose.model("product");

// response messaage
const internalError = "Database Error: there was a internal problem with the database."

// get all products
module.exports.getAllProduct = function(req, res) {
  Product.find({}, { _id: false }, function (err, products) {
    if (err) return res.status(500).json({"message":internalError});
    return res.status(200).json({"success":true, products});
  });
};

// get product by name
module.exports.getProduct = function(req, res) {
  Product.findOne({productId:req.params.productid}, { _id: false }, function (err, product) {
    if (err) return res.status(500).json({"message":internalError});
    // if product exist in the database
    if (!product)
      return res.status(409).json({"success":false, "message" : "Database error: product "+
            req.body.productName+" is already exist in the database"});

    // otherwise, return product
    return res.status(200).json({"success":true, product});
  });
};

// add product
module.exports.addProduct = function(req, res) {
  Product.find({productName:req.body.productName}, function (err, products) {
    if (err) return res.status(500).json({"message":internalError});

    // if user already exist in the database
    if (products.length)
      return res.status(409).json({"success":false, "message" : "Database error: product "+ req.body.productName+" is already exist in the database"});

    // otherwise, proceed with the request to register the user and persist the entity into the database
    var newProduct = new Product();
    newProduct.productName = req.body.productName;
    newProduct.category = req.body.category;
    newProduct.quantity = req.body.quantity;
    newProduct.price = req.body.price;

    //newProduct.setPrice(req.body.price);
    newProduct.save(function(err) {
      if (err) return res.status(500).json({"message":internalError});
      return res.status(200).json({"success":true, "message":"Product "+newProduct.productName+
            "is added Succesfully."})
    });
  });
};

// update product
module.exports.updateProduct = function(req, res) {
  Product.findOneAndUpdate({productId:req.body.productId}, req.body,
    {upsert:true}, function (err, product) {
      if (err) return res.status(500).json({"message":internalError});
      return res.status(200).json({"success":true, "message":"Product "+req.body.productId+" is updated Succesfully."})
    });
};

// Delete product by name
module.exports.deleteProduct = function(req, res) {
  Product.findOneAndDelete ({productId:req.params.productId}, function (err, product) {
    if (err) return res.status(500).json({"message":internalError});
    if (!product)
      return res.status(409).json({"success":false, "message" : "Database error: product "+ req.params.productId+" doesn't exist in the database"});

    return res.status(200).json({"success":true, "message":"Product "+product.productId+" is deleted Succesfully."})
  });
};
