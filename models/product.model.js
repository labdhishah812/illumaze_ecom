const { boolean } = require('joi');
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    product_img: {
        type: String,
        required : true
    },

    name: {
        type: String,
        required : true
    },

    description: {
        type: String,
        required : true
    },

    price: {
        type: Number,
        required : true
    },

    size: {
        type: String
    },

    color: {
        type: String,
    },

    quantity: {
        type: String,
    },

    title: {
        type: String,
        required : true
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mycategory'
    },

    istrending : {
        type : Boolean
    },
    
    // subcategory: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'mysubcategory'
    // },
},
    {
        timestamps: true
    }
)

const product = mongoose.model('myproduct', productSchema);
module.exports = product;