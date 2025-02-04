const SubCategoryModel = require('../models/sub_category.model');

const checkExistingSubCategory = async (subcategory) => {
    const existingSubCategory = await SubCategoryModel.findOne({ name : subcategory });
    return existingSubCategory !== null;
}

const subCreateCategory = async (subcategory) => {

    try {
        return SubCategoryModel.create(subcategory);
    }
    
    catch (err) {
        return err.message
    }
}

const getSubCategory = async () => {

    try {
        return SubCategoryModel.find().populate('category');
    }
    
    catch (err) {
        return err.message
    }
}

const getOneSubCategory = async (subcategory_id) => {

    try {
        return SubCategoryModel.findById(subcategory_id).populate('category');
    }
    
    catch (err) {
        return err.message
    }
}

const updateSubCategory = async (subcategory_no , subcategory) => {

    try {
        return SubCategoryModel.updateOne(subcategory_no , subcategory);
    }
    
    catch (err) {
        return err.message
    }
}

const deleteSubCategory = async (subcategory_no) => {

    try {
        return SubCategoryModel.deleteOne(subcategory_no);
    }
    
    catch (err) {
        return err.message
    }
}

const deleteAllSubCategory = async () => {

    try {
        return SubCategoryModel.deleteMany();
    }
    
    catch (err) {
        return err.message
    }
}

module.exports = {
    checkExistingSubCategory,
    subCreateCategory,
    getSubCategory,
    getOneSubCategory,
    updateSubCategory,
    deleteSubCategory,
    deleteAllSubCategory
}