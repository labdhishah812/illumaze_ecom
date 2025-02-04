const express = require('express');
const categoryController = require('../controllers/category.controller');
const router = express.Router()

router.post('/category' , categoryController.createCategory);

router.get('/category' , categoryController.getCategory);

router.get('/category/:id' , categoryController.getOneCategory);

router.put('/category/:id' , categoryController.updateCategory);

router.delete('/category/:id' , categoryController.deleteCategory);

router.delete('/category' , categoryController.deleteAllCategory);

module.exports = router;