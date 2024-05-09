const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String
       
    },
    logo: {
        type: String
    },
    category: {
        type: String
    },
    // Add more fields as needed
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
