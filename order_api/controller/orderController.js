const mongoose = require("mongoose");
const Order = mongoose.model("order");

// response messaage
const internalError = "Database Error: there was a internal problem with the database."

// get all orders
module.exports.getAllOrder = function(req, res) {
  Order.find({}, { _id: false }, function (err, orders) {
    if (err) return res.status(500).json({"message":internalError});
    return res.status(200).json({"success":true, orders});
  });
};

// get order by name
module.exports.getOrder = function(req, res) {
  Order.findOne({orderId:req.params.orderid}, { _id: false }, function (err, order) {
    if (err) return res.status(500).json({"message":internalError});
    // if order exist in the database
    if (!order)
      return res.status(409).json({"success":false, "message" : "Database error: order "+
            req.body.orderId+" is already exist in the database"});

    // otherwise, return order
    return res.status(200).json({"success":true, order});
  });
};

// add order
module.exports.addOrder = function(req, res) {
    var newOrder = new Order();
    newOrder.buyerId = req.body.buyerId;
    newOrder.sellerId = req.body.sellerId;
    newOrder.productId = req.body.productId;
    newOrder.status = req.body.status;

    newOrder.save(function(err) {
      if (err) return res.status(500).json({"message":internalError});
      return res.status(200).json({"success":true, "message":"Order "+newOrder.orderId+
            "is added Succesfully."});
    });
};

// update order
module.exports.updateOrder = function(req, res) {
  Order.findOneAndUpdate({orderId:req.body.orderId}, req.body,
    {upsert:true}, function (err, order) {
      if (err) return res.status(500).json({"message":internalError});
      return res.status(200).json({"success":true, "message":"Order "+req.body.orderId+" is updated Succesfully."})
    });
};

// Delete order by name
module.exports.deleteOrder = function(req, res) {
  Order.findOneAndDelete ({orderId:req.params.orderId}, function (err, order) {
    if (err) return res.status(500).json({"message":internalError});
    if (!order)
      return res.status(409).json({"success":false, "message" : "Database error: order "+ req.params.orderId+" doesn't exist in the database"});

    return res.status(200).json({"success":true, "message":"Order "+order.orderId+" is deleted Succesfully."})
  });
};
