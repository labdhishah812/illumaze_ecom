const express = require('express');
const subCategoryController = require('../controllers/sub_category.controller');
const router = express.Router()

router.post('/subcategory' , subCategoryController.suCreateSubCategory);

router.get('/subcategory' , subCategoryController.getSubCategory);

router.get('/subcategory/:id' , subCategoryController.getOneSubCategory);

router.put('/subcategory/:id' , subCategoryController.updateSubCategory);

router.delete('/subcategory/:id' , subCategoryController.deleteSubCategory);

router.delete('/subcategory' , subCategoryController.deleteAllSubCategory);

module.exports = router;