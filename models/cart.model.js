const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myuser'
    },

    cartItems : [
        {
            productId : {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'myproduct'
            },
        
            product_quantity : {
                type: Number,
                default : 1
            },
        }
    ],
    subtotal : {
        type : String
    }
},
    {
        timestamps: true
    }
);

const cart = mongoose.model('mycart', cartSchema);
module.exports = cart;