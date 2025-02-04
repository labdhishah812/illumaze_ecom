const express = require('express');
const orderController = require('../controllers/order.controller');
const router = express.Router()

router.post('/order' , orderController.createOrder);

router.get('/order' , orderController.getOrder);

router.get('/order/:id' , orderController.getOneOrder);

router.put('/order/:id' , orderController.updateOrder);

router.delete('/order/:id' , orderController.deleteOrder);

router.delete('/order' , orderController.deleteAllOrder);

module.exports = router;