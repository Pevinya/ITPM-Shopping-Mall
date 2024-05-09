const router = require("express").Router();
const fs = require("fs");
const Item = require("../models/itemsModel");

const multer = require("multer");
const upload = multer();

const { storage } = require('../config/firebase');
const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');

const getCurrentDateTimeString = () => {
    // Get the current date and time
    const currentDate = new Date();
  
    // Format the date and time as a string
    const dateTimeString = currentDate.toISOString().replace(/[-:.]/g, '');
  
    return dateTimeString;
  };

const uploadImage = async (file, foldername, imagename) => {
  try {
    if (!file) {
      console.log("Error: No file provided");
      return null;
    }

    const imageRef = ref(storage, `${foldername}/${imagename}.jpg`);
    
    // Upload the file to Firebase Storage
    await uploadBytes(imageRef, file.buffer);

    // Get the download URL of the uploaded image
    const imageUrl = await getDownloadURL(imageRef);

    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error(`Error uploading image: ${error.message}`);
  }
};

// Add items
// router.post("/add-items", async (req, res) => {
//     try {
//         const { title, shop, price, size, color, description } = req.body;
//         const productImage = {
//             data: fs.readFileSync(req.file.path),
//             contentType: req.file.mimetype
//         };
//         const newItem = await Item.create({ title, shop, price, size, color, description, productImage });
//         return res.json({ success: true, data: newItem });
//     } catch (error) {
//         return res.status(500).json({ success: false, message: error.message });
//     }
// });

router.post("/add-items",upload.single("file"), async (req, res) => {
    try {
        const { name, shop, price, size, color, description } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
          }
          const imagefile = req.file;
          const uniqueName = getCurrentDateTimeString();
          const imageUrl = await uploadImage(imagefile, name , uniqueName);
        // Convert the file buffer to a base64-encoded string
        // const productImage = req.file.buffer.toString('base64');
        const newItem = await Item.create({ title:name, shop, price, size, color, description, productImage:imageUrl });
        return res.json({ success: true, data: newItem });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }

});


// Update an item
router.put("/update-item/:id", async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.send({ success: true, message: "Item updated successfully", data: updatedItem });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});

// Delete an item
router.delete("/delete-item/:id", async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        return res.send({ success: true, message: "Item deleted successfully" });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});

// Get all items
router.get("/get-all-items", async (req, res) => {
    try {
        const items = await Item.find();
        return res.send({ success: true, data: items });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});

// Get an item by ID
router.get("/get-item-by-id/:id", async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        return res.send({ success: true, data: item });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});

// Get all items by shop
router.get("/get-items-by-shop/:shopName", async (req, res) => {
    try {
        const items = await Item.find({ shop: req.params.shopName });
        return res.send({ success: true, data: items });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
});

// Get item image by ID
router.get("/get-item-image/:id", async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ success: false, message: "Item not found" });
        }
        // Send image data as response with appropriate content type
        res.set('Content-Type', item.productImage.contentType);
        return res.send(item.productImage.data);
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
