const express = require('express');
const router = express.Router();

const productController = require('./controller/productController');

// product APIs
router.get('/', productController.getAllProduct);
router.get('/:productId', productController.getProduct);
router.post('/', productController.addProduct);
router.put('/', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

module.exports = router;
