const mongoose = require('mongoose');
const paymentSchema = mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    payment_method: {
        type: String,
        required: true
    },

    transaction_id: {
        type: String,
        required: true
    },

    total_price: {
        type: String,
        required : true
    },

    payment_date: {
        type: Date,
        required: true
    },

    orders : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myorder'
    }
},
    {
        timestamps: true
    }
);

const payment = mongoose.model('mypayment', paymentSchema);
module.exports = payment;