const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true
    },
    
},
    {
        timestamps: true
    }
);

const category = mongoose.model('mycategory', categorySchema);
module.exports = category;