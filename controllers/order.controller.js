const OrderService = require('../services/order.service');

const createOrder = async (req, res) => {

    try {
        const ordered_date = Date.now()

        const { userId, cartId, country, first_name, last_name , street_address , city , state , postcode , email , phone_number , order_total , order_status} = req.body;

        const order = await OrderService.createOrder({
            userId, cartId, country, first_name, last_name , street_address , city , state , postcode , email , phone_number , order_total , ordered_date , order_status
        })

        res.status(201).json({
            data: order,
            message: "successfully created order"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const getOrder = async (req, res) => {
    try {
        const cart = await OrderService.getOrder();
        res.status(201).json({
            data: cart,
            message: "successfully get order"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const getOneOrder = async (req, res) => {
    try {
        const cart = await OrderService.getOneOrder({ _id: req.params.id });
        res.status(201).json({
            data: cart,
            message: "successfully get order"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const updateOrder = async (req, res) => {
    try {
        const cart = await OrderService.updateOrder({ _id: req.params.id }, { $set: req.body });
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

const deleteOrder = async (req, res) => {
    try {
        const cart = await OrderService.deleteOrder({ _id: req.params.id });
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

const deleteAllOrder = async (req, res) => {
    try {
        const cart = await OrderService.deleteAllOrder();
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
    createOrder,
    getOrder,
    getOneOrder,
    updateOrder,
    deleteOrder,
    deleteAllOrder
}