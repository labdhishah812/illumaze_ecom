const express = require('express');
const productController = require('../controllers/product.controller');
const productUpload = require('../middlewares/upload_img');
const router = express.Router()

router.post('/product', productUpload.singleUpload, productController.createProduct);

router.get('/product' , productController.getProduct);

router.get('/category/product/:name' , productController.getProductByCategory);

router.get('/product/:id' , productController.getOneProduct);

router.get('/filter/product' , productController.filterProducts);

router.get('/trending/product' , productController.trendingProducts)

router.put('/product/:id', productUpload.singleUpload ,productController.updateProduct);

router.delete('/product/:id' , productController.deleteProduct);

router.delete('/product' , productController.deleteAllProduct);

module.exports = router;