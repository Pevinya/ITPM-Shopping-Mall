const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    enum:['XS','S','M','L','XL'] 
  },
  color: {
    type: String,
    enum:['op1','op2','op3','op4','op5','op6']
  },
  description: {
    type: String,
    required: true
  },
  bestSelling: {
    type: Boolean,
    default: false
  },
  productImage: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Item", itemSchema);
