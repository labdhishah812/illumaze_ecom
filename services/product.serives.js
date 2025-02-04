const ProductModel = require('../models/product.model');

const createProduct = async (product) => {

    try {
        return ProductModel.create(product);
    }

    catch (err) {
        return err.message
    }
}

const getProduct = async () => {

    try {
        // return ProductModel.find().populate(['category' , 'subcategory']); //pre code
        return ProductModel.find().populate('category');
    }

    catch (err) {
        return err.message
    }
}

const getProductByCategory = async () => {
    const categoryName = req.params.categoryName
    try {
        return ProductModel.find()
            .populate({ path: 'category', match: { name: categoryName } })
            .exec();
    }

    catch (err) {
        return err.message
    }
}

const trendingProducts = async (product) => {

    try {
        return ProductModel.find(product)
    }
    catch (err) {
        return err.message
    }
}

const getOneProduct = async (product_no) => {

    try {
        return ProductModel.findOne(product_no);
    }

    catch (err) {
        return err.message
    }
}

const updateProduct = async (productId, product) => {

    try {
        return ProductModel.updateOne(productId, product);
    }

    catch (err) {
        return err.message
    }
}

const deleteProduct = async (product_no) => {

    try {
        return ProductModel.deleteOne(product_no);
    }

    catch (err) {
        return err.message
    }
}

const deleteAllProduct = async () => {

    try {
        return ProductModel.deleteMany();
    }

    catch (err) {
        return err.message
    }
}


module.exports = {
    createProduct,
    getProduct,
    trendingProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    deleteAllProduct,
    getProductByCategory
}