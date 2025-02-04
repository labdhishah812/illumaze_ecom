const express = require('express');
const paymentController = require('../controllers/payment.controller');
const router = express.Router()

router.post('/payment' , paymentController.makePayment);

router.get('/payment' , paymentController.getPayment);

router.get('/payment/:id' , paymentController.getOnePayment);

router.put('/payment/:id' , paymentController.updatePayment);

router.delete('/payment/:id' , paymentController.deletePayment);

router.delete('/payment' , paymentController.clearPayment);

module.exports = router;