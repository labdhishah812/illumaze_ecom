const OrderModel = require('../models/order.model');

const createOrder = async (order) => {

    try {
        return OrderModel.create(order);
    }
    
    catch (err) {
        return err.message
    }
}

const getOrder = async () => {

    try {
        return OrderModel.find()
        .populate('userId')
        .populate('cartId')
        .exec();
    }
    
    catch (err) {
        return err.message
    }
}

const getOneOrder = async (order_id) => {

    try {
        return OrderModel.findOne(order_id);
    }
    
    catch (err) {
        return err.message
    }
}

const updateOrder = async (order_id , order) => {

    try {
        return OrderModel.updateOne(order_id , order);
    }
    
    catch (err) {
        return err.message
    }
}

const deleteOrder = async (order_id) => {

    try {
        return OrderModel.deleteOne(order_id);
    }
    
    catch (err) {
        return err.message
    }
}

const deleteAllOrder = async () => {

    try {
        return OrderModel.deleteMany();
    }
    
    catch (err) {
        return err.message
    }
}

module.exports = {
    createOrder,
    getOrder,
    getOneOrder,
    updateOrder,
    deleteOrder,
    deleteAllOrder
}