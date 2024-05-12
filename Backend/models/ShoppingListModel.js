// ShoppingListModel.js

const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date }
});

const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

module.exports = ShoppingList;
