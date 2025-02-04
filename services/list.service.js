const cartModel = require('../models/cart.model');
const ListModel = require('../models/list.model');

const createList = async (list) => {

    try {
        return ListModel.create(list);
    }
    
    catch (err) {
        return err.message
    }
}

const getList = async () => {

    try {
        return ListModel.find()
        .populate('userId')
        .populate('listItems.productId')
        .exec();
    }
    
    catch (err) {
        return err.message
    }
}

const getOneList = async (list_id) => {

    try {
        return ListModel.findOne(list_id);
    }
    
    catch (err) {
        return err.message
    }
}

const updateList = async (list_id , list) => {

    try {
        return ListModel.updateOne(list_id , list);
    }
    
    catch (err) {
        return err.message
    }
}

const deletelistItem = async (productId) => {
    try {
        const result = await ListModel.updateOne(
            { 'listItems.productId': productId },
            { $pull: { listItems: { productId: productId } } }
        )
        return result
    } catch (err) {
        return err.message
    }
}

// const listToCartItem = async (productId) => {
//     try {
//         const removeItem = await ListModel.updateOne(
//             { 'listItems.productId': productId },
//             { $pull: { listItems: { productId: productId } } }
//         )
       
//         const addItem = await cartModel.updateOne(
//             { 'listItems.productId': productId },
//             { $push: { listItems: { productId: productId } } }
//         )

//         return removeItem , addItem
        
//     } catch (err) {
//         return err.message
//     }
// }

const clearList = async () => {

    try {
        return ListModel.deleteMany();
    }
    
    catch (err) {
        return err.message
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