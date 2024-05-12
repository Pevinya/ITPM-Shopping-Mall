const router = require("express").Router();
const ShoppingItem = require("../models/ShoppingListModel");

// Add an item to the shopping list
router.post("/add-shoppingList", async (req, res) => {
  try {
    const newItem = new ShoppingItem(req.body);
    await newItem.save();
    return res.send({ success: true, message: "Item added to the shopping list successfully" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

// Update an item in the shopping list
router.put("/update-ShoppingList/:id", async (req, res) => {
  try {
    await ShoppingItem.findByIdAndUpdate(req.params.id, req.body);
    return res.send({ success: true, message: "Item updated successfully in the shopping list" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

// Delete an item from the shopping list
router.delete("/delete-Shopping/:id", async (req, res) => {
  try {
    await ShoppingItem.findByIdAndDelete(req.params.id);
    return res.send({ success: true, message: "Item deleted successfully from the shopping list" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

// Get all items from the shopping list
router.get("/get-all-ShoppingList", async (req, res) => {
  try {
    const items = await ShoppingItem.find().sort({ createdAt: -1 });
    return res.send({ success: true, data: items });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

// Get an item from the shopping list by id
router.get("/get-Shopping-by-id/:id", async (req, res) => {
  try {
    const item = await ShoppingItem.findById(req.params.id);
    return res.send({ success: true, data: item });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

module.exports = router;
