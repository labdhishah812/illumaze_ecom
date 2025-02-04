const CategoryModel = require('../models/category.model');

const checkExistingCategory = async (category) => {
    const existingCategory = await CategoryModel.findOne({ name : category });
    return existingCategory !== null;
}

const createCategory = async (category) => {

    try {
        return CategoryModel.create(category);
    }
    
    catch (err) {
        return err.message
    }
}

const getCategory = async () => {

    try {
        return CategoryModel.find();
    }
    
    catch (err) {
        return err.message
    }
}

const getOneCategory = async (category_no) => {

    try {
        return CategoryModel.findOne(category_no);
    }
    
    catch (err) {
        return err.message
    }
}

const updateCategory = async (category_no , category) => {

    try {
        return CategoryModel.updateOne(category_no , category);
    }
    
    catch (err) {
        return err.message
    }
}

const deleteCategory = async (category_no) => {

    try {
        return CategoryModel.deleteOne(category_no);
    }
    
    catch (err) {
        return err.message
    }
}

const deleteAllCategory = async () => {

    try {
        return CategoryModel.deleteMany();
    }
    
    catch (err) {
        return err.message
    }
}


module.exports = {
    checkExistingCategory,
    createCategory,
    getCategory,
    getOneCategory,
    updateCategory,
    deleteCategory,
    deleteAllCategory
}