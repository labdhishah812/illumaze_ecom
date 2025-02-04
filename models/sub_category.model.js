const mongoose = require('mongoose');
const subCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'mycategory'
    }
},
    {
        timestamps: true
    }
);

const category = mongoose.model('mysubcategory', subCategorySchema);
module.exports = category;