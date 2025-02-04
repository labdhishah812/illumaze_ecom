const mongoose = require('mongoose');
const listSchema = mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myuser'
    },

    listItems : [
        {
            productId : {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'myproduct'
            }
        }
    ],

    cartId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mycart'
    }
},
    {
        timestamps: true
    }
);

const list = mongoose.model('mylist', listSchema);
module.exports = list;