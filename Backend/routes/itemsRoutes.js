const router = require("express").Router();
const Items = require("../models/itemsModel");


// Add items
router.post("/add-items", async (req, res) => {
    try {
        console.log(req.body)
        const items = await Items.create(req.body)
        if(!items){
            console.log("fnerfhsfvrh48fdnf,rebfnjefliv.fdnm")
        }
        return res.send({ success: true, message: "Item added successfully" });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});

// Update an item
router.put("/update-item/:id", async (req, res) => {
    try {
        await Items.findByIdAndUpdate(req.params.id, req.body);
        return res.send({ success: true, message: "Item updated successfully" });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});

// Delete an item
router.delete("/delete-item/:id", async (req, res) => {
    try {
        await Items.findByIdAndDelete(req.params.id);
        return res.send({ success: true, message: "Item deleted successfully" });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});

// Get all items
router.get("/get-all-items", async (req, res) => {
    try {
        const items = await Items.find();
        return res.send({ success: true, data: items });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});

// Get an item by ID
router.get("/get-item-by-id/:id", async (req, res) => {
    try {
        const item = await Items.findById(req.params.id);
        return res.send({ success: true, data: item });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});

module.exports = router;