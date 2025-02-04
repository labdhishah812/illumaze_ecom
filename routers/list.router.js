const express = require('express');
const listController = require('../controllers/list.controller');
const router = express.Router()

router.post('/list' , listController.createList);

router.get('/list' , listController.getList);

router.get('/list/:id' , listController.getOneList);

router.put('/list/:id' , listController.updateList);

router.delete('/list/:id/product/:productId' , listController.deletelistItem);

// router.post('/list-to-cart/:productId' , listController.listToCartItem);

router.delete('/list' , listController.clearList);

module.exports = router;