const express = require('express');
const cartController = require('../controllers/cart.controller');
const router = express.Router()

router.post('/cart' , cartController.createCart);

router.get('/cart' , cartController.getCart);

router.get('/cart/:id' , cartController.getOneCart);

router.put('/cart/:id' , cartController.updateCart);

router.delete('/cart/:id' , cartController.deleteCart);

router.delete('/cart/:id/product/:productId' , cartController.deleteCartItem);

router.delete('/cart' , cartController.clearCart);

module.exports = router;