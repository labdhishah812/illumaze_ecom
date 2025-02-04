const subCategoryService = require('../services/sub_category.service');

const suCreateSubCategory = async (req, res) => {

    const { name, category } = req.body;

    try {
        const existingSubCategory = await subCategoryService.checkExistingSubCategory(name);
        if (existingSubCategory) {
            return res.status(409).json({
                status: "this subcategory is already exists",
            })
        }

        const categorydata = await subCategoryService.subCreateCategory({
            name, category
        })

        res.status(201).json({
            data: categorydata,
            message: "successfully created sub-category"
        })
    }
    catch (err) {
        res.status(404).json({
            data: err.message
        })
    }
}

const getSubCategory = async (req, res) => {
    try {
        const category = await subCategoryService.getSubCategory();
        res.status(201).json({
            data: category,
            message: "successfully get sub-category"
        })
    }
    catch (err) {
        res.status(404).json({
            data: err.message
        })
    }
}

const getOneSubCategory = async (req, res) => {

    try {
        const cart = await subCategoryService.getOneSubCategory({ _id: req.params.id });
        res.status(201).json({
            data: cart,
            message: "successfully get sub-category"
        })
    }
    catch (err) {
        res.status(404).json({
            data: err.message
        })
    }
}

const updateSubCategory = async (req, res) => {

    try {
        const cart = await subCategoryService.updateSubCategory({ _id: req.params.id }, { $set: req.body });
        res.status(201).json({
            data: cart,
            message: "successfully updated"
        })
    }
    catch (err) {
        res.status(201).json({
            data: err.message
        })
    }
}

const deleteSubCategory = async (req, res) => {

    try {
        const cart = await subCategoryService.deleteSubCategory({ _id: req.params.id });
        res.status(201).json({
            data: cart,
            message: "successfully deleted"
        })
    }
    catch (err) {
        res.status(201).json({
            data: err.message
        })
    }
}

const deleteAllSubCategory = async (req, res) => {

    try {
        const cart = await subCategoryService.deleteAllSubCategory();
        res.status(201).json({
            data: cart,
            message: "successfully deleted"
        })
    }
    catch (err) {
        res.status(201).json({
            data: err.message
        })
    }
}

module.exports = {
    suCreateSubCategory,
    getSubCategory,
    getOneSubCategory,
    updateSubCategory,
    deleteSubCategory,
    deleteAllSubCategory
}