const router = require("express").Router();
const Package = require("../models/packagesModel");
//const authMiddleware = require("../middlewares/authMiddleware");

// add a package
router.post("/add-package", async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save();
    return res.send({ success: true, message: "Package added successfully" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

// update a package
router.put("/update-package/:id", async (req, res) => {
  try {
    await Package.findByIdAndUpdate(req.params.id, req.body);
    return res.send({ success: true, message: "Package updated successfully" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

// delete a package
router.delete("/delete-package/:id", async (req, res) => {
  try {
    await Package.findByIdAndDelete(req.params.id);
    return res.send({ success: true, message: "Package deleted successfully" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

// get all packages
router.get("/get-all-packages", async (req, res) => {
  try {
    const packages = await Package.find().sort({ createdAt: -1 });
    return res.send({ success: true, data: packages });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});
// get a package by id
router.get("/get-package-by-id/:id", async (req, res) => {
  try {
    const package = await Package.findById(req.params.id);
    return res.send({ success: true, data: package });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

module.exports = router;