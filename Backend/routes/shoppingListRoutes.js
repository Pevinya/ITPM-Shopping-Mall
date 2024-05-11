// shoppingListRoutes.js

const express = require('express');
const router = express.Router();
const ShoppingList = require('../models/ShoppingListModel');

// Create a new shopping list
router.post('/shopping-lists', async (req, res) => {
  try {
    const { title, date, items } = req.body;
    const newList = new ShoppingList({
      title,
      date,
      items
    });
    await newList.save();
    res.status(201).json({ message: 'Shopping list created successfully' });
  } catch (error) {
    console.error('Error creating shopping list:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
