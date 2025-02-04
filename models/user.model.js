const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        minlength: 8,
        required: true
    },

    first_name: {
        type: String,

    },

    last_name: {
        type: String,

    },

    phone_number: {
        type: Number,

    },

    register_date: {
        type: Date
    },

    street_address: {
        type: String
    },

    city: {
        type: String
    },

    state: {
        type: String
    },

    country: {
        type: String
    },

    postcode: {
        type: Number
    },

    accesstoken: {
        type: String
    },

    password_token: {
        type: String,
        default: ''
    }
},
    {
        timestamps: true
    }
)

const User = mongoose.model('myuser', UserSchema);
module.exports = User;