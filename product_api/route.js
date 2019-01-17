const express = require('express');
const router = express.Router();

const productController = require('./controller/productController');

// product APIs
router.get('/', productController.getAllProduct);
router.get('/:product_name', productController.getProduct);
router.post('/', productController.addProduct);
router.put('/', productController.updateProduct);
router.delete('/:product_name', productController.deleteProduct);

module.exports = router;
