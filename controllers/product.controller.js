const productService = require('../services/product.serives');
const productModel = require('../models/product.model');
const CategoryModel = require('../models/category.model');

const createProduct = async (req, res) => {
    try {     
        const { name, description, price, size, color, category, quantity, title , istrending} = req.body;
        const product_img = req.file.location;


        const product = await productService.createProduct({
            name, description, price, size, color, category, quantity, title, product_img , istrending
        })
        res.status(201).json({
            data: product,
            message: "successfully created product"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const getProduct = async (req, res) => {

    try {
        const product = await productService.getProduct();
        res.status(201).json({
            data: product,
            message: "successfully get the product"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const getProductByCategory = async (req, res) => {
    try {
        const categoryName = req.params.name
        const category = await CategoryModel.findOne({name : categoryName})
        if(!category) {
            return res.status(404).json({
                msg : "category not found"
            })
        }

        const product = await productModel.find({ category : category._id});
        res.status(201).json({
            data: product,
            message: "successfully get the product"
        })
    }
    catch (err) {
        res.status(500).json({
            Error: err.message,
        })
    }
}

const filterProducts = async (req, res) => {
    try {
        // const productPrice = req.params.price
        // console.log(productPrice)

        const { size , price , color , quantity} = req.query
        
        const filterData = {};
        
        if (size) {
            filterData.size = { $regex : size , $options : 'i'}
        }

        if (price) {
            const priceRange = price.split('-'); 
            const minPrice = parseInt(priceRange[0]);
            const maxPrice = parseInt(priceRange[1]);
          
            filterData.price = { $gte: minPrice, $lte: maxPrice };
          }
          
        
        if (color) { 
            filterData.color = { $regex : color , $options : 'i'}
        }

        if (quantity) { 
            filterData.color = { $regex : quantity , $options : 'i'}
        }

        const filteredProduct = await productModel.find(filterData);
        res.status(201).json({
            data: filteredProduct,
            message: "successfully get the product"
        })
    }
    catch (err) {
        res.status(500).json({
            Error: err.message,
        })
    }
}

const trendingProducts = async (req , res) => {
    try{

        const product = await productService.trendingProducts({ istrending : true})
        res.status(200).json({
            data: product,
            message: "successfully get the trending products"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}


const getOneProduct = async (req, res) => {

    try {
        const product = await productService.getOneProduct({ _id: req.params.id });
        res.status(201).json({
            data: product,
            message: "successfully get the product"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { name, description, price, size, color, category, quantity, title, istrending } = req.body;
        const product_img = req.file.location;

        const updatedProduct = await productModel.updateOne({_id: req.params.id}, {
            name, description, price, size, color, category, quantity, title, product_img, istrending
        });

        res.status(200).json({
            data: updatedProduct,
            message: "Successfully updated product",
        });
    } catch (err) {
        res.status(400).json({
            Error: err.message,
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct({ _id: req.params.id });
        res.status(201).json({
            data: product,
            message: "successfully deleted"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const deleteAllProduct = async (req, res) => {

    try {
        const product = await productService.deleteAllProduct();
        res.status(201).json({
            data: product,
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
    createProduct,
    getProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    deleteAllProduct,
    getProductByCategory,
    filterProducts,
    trendingProducts
}