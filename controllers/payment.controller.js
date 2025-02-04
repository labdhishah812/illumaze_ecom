const paymentService = require('../services/payment.service');

const makePayment = async (req, res) => {
    try {
        const payment_date = Date.now()

        const { payment_method, transaction_id, total_price, orders } = req.body;

        const payment = await paymentService.makePayment({
            payment_method, transaction_id, total_price, payment_date, orders
        })

        res.status(201).json({
            data: payment,
            message: "successfully created payment"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const getPayment = async (req, res) => {
    try {
        const payment = await paymentService.getPayment();
        res.status(201).json({
            data: payment,
            message: "successfully get payment"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const getOnePayment = async (req, res) => {
    try {
        const cart = await paymentService.getOnePayment({ _id: req.params.id });
        res.status(201).json({
            data: cart,
            message: "successfully get payment"
        })
    }
    catch (err) {
        res.status(400).json({
            Error: err.message,
        })
    }
}

const updatePayment = async (req, res) => {
    try {
        const cart = await paymentService.updatePayment({ _id: req.params.id }, { $set: req.body });
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

const deletePayment = async (req, res) => {
    try {
        const cart = await paymentService.deletePayment({ _id: req.params.id });
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

const clearPayment = async (req, res) => {
    try {
        const cart = await paymentService.clearPayment({ _id: req.params.id });
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
    makePayment,
    getPayment,
    getOnePayment,
    updatePayment,
    deletePayment,
    clearPayment
}