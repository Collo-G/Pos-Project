const express = require('express');
const router = express.Router();
const productController = require('../Controller/productController');

router.post('/addProduct', productController.addProduct);
router.get('/getProduct', productController.getAllProduct);

module.exports = router;



