const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const existingCategory = await categoryService.checkExistingCategory(name);
        if (existingCategory) {
            return res.status(409).json({
                status: "this Category is already exists",
            })
        }

        const category = await categoryService.createCategory({
            name
        })

        res.status(201).json({
            data: category,
            message: "successfully created category"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const getCategory = async (req, res) => {
    try {
        const category = await categoryService.getCategory();
        res.status(201).json({
            data: category,
            message: "successfully get category"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const getOneCategory = async (req, res) => {
    try {
        const cart = await categoryService.getOneCategory({ _id: req.params.id });
        res.status(201).json({
            data: cart,
            message: "successfully created product"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const updateCategory = async (req, res) => {
    try {
        const cart = await categoryService.updateCategory({ _id: req.params.id }, { $set: req.body });
        res.status(201).json({
            data: cart,
            message: "successfully updated"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const cart = await categoryService.deleteCategory({ _id: req.params.id });
        res.status(201).json({
            data: cart,
            message: "successfully deleted"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const deleteAllCategory = async (req, res) => {
    try {
        const cart = await categoryService.deleteAllCategory();
        res.status(201).json({
            data: cart,
            message: "successfully deleted"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

module.exports = {
    createCategory,
    getCategory,
    getOneCategory,
    updateCategory,
    deleteCategory,
    deleteAllCategory
}