const listService = require('../services/list.service');
// const productModel = require('../models/product.model');
const listModel = require("../models/list.model");
const { default: mongoose } = require('mongoose');

// const createList = async (req, res) => {

//     try {
//         // const { users , products} = req.body;
//         const { products} = req.body;

//         if(!mongoose.Types.ObjectId.isValid(products)){
//             return res.status(404).json({message : "invalid entity"})
//         }

//         const getProduct = listModel.findOne({products});

//         if(!getProduct) {
//             return res.status(404).json({message : "product not found"})
//         }

//         const list = await listService.createList({
//             products 
//         })

//         res.status(201).json({
//             data: list
//         })
//     }
//     catch (err) {
//         res.status(400).json({
//             Error: err.message,
//         })
//     }
// }

const createList = async (req, res) => {
    try {
        const { userId, listItems } = req.body;
        const list = await listService.createList({
            userId, listItems
        })
        res.status(201).json({
            data: list,
            message: "product added to the list"
        })
    } catch (error) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const getList = async (req, res) => {
    try {
        const list = await listService.getList();
        res.status(201).json({
            data: list
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const getOneList = async (req, res) => {
    try {
        const cart = await listService.getOneList({ _id: req.params.id });
        res.status(201).json({
            data: cart
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const updateList = async (req, res) => {

    try {
        const cart = await listService.updateList({ _id: req.params.id }, { $set: req.body });
        res.status(201).json({
            data: cart
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const deletelistItem = async (req, res) => {
    try {
        const productId = req.params.productId;
        const result = await listService.deletelistItem(productId);

        res.status(200).json({
            data: result
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
}

// const listToCartItem = async (req, res) => {
//     try {
//         const {userId , cartId } = req.body;
//         const productId = req.params.productId;

        
//         const result = await listService.listToCartItem(productId);

//         res.status(200).json({
//             data: result
//         });
//     } catch (err) {
//         res.status(400).json({
//             success: false,
//             message: err.message
//         });
//     }
// }


const clearList = async (req, res) => {
    try {
        const cart = await listService.clearList();
        res.status(201).json({
            data: cart
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

module.exports = {
    createList,
    getList,
    getOneList,
    updateList,
    deletelistItem,
    // listToCartItem,
    clearList
}