const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myuser'
    },

    cartId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myproduct'
    },

    country : {
        type: String,
        required: true
    },

    first_name : {
        type: String,
        required: true
    },

    last_name : {
        type: String,
        required: true
    },

    street_address : {
        type: String,
        required: true
    },

    city : {
        type: String,
        required: true
    },

    state : {
        type: String,
        required: true
    },

    postcode : {
        type: String,
        required: true
    },

    email : {
        type: String,
        required: true
    },

    phone_number : {
        type : Number,
        required : true
    },
    
    order_total: {
        type: Number,
        required: true
    },

    order_status: {
        type: String,
        enum : ['Pending' , 'Received' , 'Cancelled']
    },

    ordered_date: {
        type: Date,
        required: true
    },

},
    {
        timestamps: true
    }
);

const order = mongoose.model('myorder', orderSchema);
module.exports = order;