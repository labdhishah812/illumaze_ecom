const CartModel = require('../models/cart.model');

const createCart = async (cart) => {

    try {
        return CartModel.create(cart);
    }

    catch (err) {
        return err.message
    }
}

const getCart = async () => {

    try {
        return CartModel.find()
        .populate('userId')
        .populate('cartItems.productId')
        .exec();
    }

    catch (err) {
        return err.message
    }
}

const getOneCart = async (cart_no) => {

    try {
        return CartModel.findOne(cart_no);
    }

    catch (err) {
        return err.message
    }
}

const updateCart = async (cart_no, cart) => {

    try {
        return CartModel.updateOne(cart_no, cart);
    }

    catch (err) {
        return err.message
    }
}

const deleteCart = async (cart_no) => {

    try {
        return CartModel.deleteOne(cart_no);
    }

    catch (err) {
        return err.message
    }
}

const clearCart = async () => {
    try {
        return CartModel.deleteMany();
    }

    catch (err) {
        return err.message
    }
}

// const deleteCartItem = async (productId) => {

//     try {
//         return CartModel.deleteOne({'cartItems.productId' : productId});
//     }

//     catch (err) {
//         return err.message
//     }
// }

const deleteCartItem = async (productId) => {
    try {
        const result = await CartModel.updateOne(
            { 'cartItems.productId': productId },
            { $pull: { cartItems: { productId: productId } } }
        )
        return result
    } catch (err) {
        throw err;
    }
}


module.exports = {
    createCart,
    getCart,
    getOneCart,
    updateCart,
    deleteCart,
    clearCart,
    deleteCartItem
}