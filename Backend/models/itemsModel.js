const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        //required: true
    },
    shop: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        //required: true
    },
    size: {
        type: [String],
        // enum:['XS','S','M','L','XL'] 
    },
    color: {
        type: [String],
        // enum:['op1','op2','op3','op4','op5','op6']
    },
    description: {
        type: String,
        //required: true
    },
    bestSelling: {
        type: Boolean,
        default: false
    },
    productImage: {
        type: String, // Store image data as base64-encoded string
        // contentType: String // Store content type of the image
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Item", itemSchema);
