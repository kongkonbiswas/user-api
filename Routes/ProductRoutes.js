const express = require('express');
const router = express.Router();

//import
const ProductController = require('../Controllers/Product_Controller.js');

// post method [loscalhost:3000/products/]
router.post('/', ProductController.createNewProduct);

module.exports = router;