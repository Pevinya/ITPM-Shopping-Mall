const router = require("express").Router();
const Shop = require("../models/shopModel");

// Add a new shop
router.post("/add-shop", async (req, res) => {
    try {
        const shop = await Shop.create(req.body);
        console.log("Shop added successfully.");
        return res.status(201).json({ success: true, message: "Shop added successfully", data: shop });
    } catch (error) {
       console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
});

// Update a shop by ID
router.put("/update-shop/:id", async (req, res) => {
    try {
        await Shop.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({ success: true, message: "Shop updated successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

// Delete a shop by ID
router.delete("/delete-shop/:id", async (req, res) => {
    try {
        await Shop.findByIdAndDelete(req.params.id);
        return res.status(200).json({ success: true, message: "Shop deleted successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

// Get all shops
router.get("/get-all-shops", async (req, res) => {
    try {
        const shops = await Shop.find();
        return res.status(200).json({ success: true, data: shops });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

// Get shop details by ID
router.get("/get-shop-by-id/:id", async (req, res) => {
    try {
        const shop = await Shop.findById(req.params.id);
        if (!shop) {
            return res.status(404).json({ success: false, message: "Shop not found" });
        }
        return res.status(200).json({ success: true, data: shop });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
