const PaymentModel = require('../models/payment.model');

const makePayment = async (payment) => {

    try {
        return PaymentModel.create(payment);
    }
    
    catch (err) {
        return err.message
    }
}

const getPayment = async () => {

    try {
        return PaymentModel.find().populate('orders');
    }
    
    catch (err) {
        return err.message
    }
}

const getOnePayment = async (payment_no) => {

    try {
        return PaymentModel.findOne(payment_no);
    }
    
    catch (err) {
        return err.message
    }
}

const updatePayment = async (payment_no , payment) => {

    try {
        return PaymentModel.updateOne(payment_no , payment);
    }
    
    catch (err) {
        return err.message
    }
}

const deletePayment = async (payment_no) => {

    try {
        return PaymentModel.deleteOne(payment_no);
    }
    
    catch (err) {
        return err.message
    }
}

const clearPayment = async () => {

    try {
        return PaymentModel.deleteMany();
    }
    
    catch (err) {
        return err.message
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