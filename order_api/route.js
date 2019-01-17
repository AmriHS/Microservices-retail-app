const express = require('express');
const router = express.Router();

const orderController = require('./controller/orderController');

// product APIs
router.get('/', orderController.getAllOrder);
router.get('/:orderId', orderController.getOrder);
router.post('/', orderController.addOrder);
router.put('/', orderController.updateOrder);
router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;
