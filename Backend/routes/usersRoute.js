const express = require("express");
const router = express.Router();
const User = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authiddleware")

// Register a new user
router.post("/register", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.send({
                success: false,
                message: "Email already exists",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newUser = new User(req.body);
        await newUser.save();
        return res.send({
            success: true,
            message: "User created successfully",
        });
        
    } catch (error) {
        console.log("Error in register route:", error);
        res.send({
            success: false,
            message: error.message,
        });
    }
});

//login a user
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.send({
                success: false,
                message: "User does not exist",
            });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.send({
                success: false,
                message: "Invalid Password",
            });
        }
        
        const token = jwt.sign({userId: user._id}, process.env.jwt_secret , {expiresIn: "1d"});

        return res.send({
            success: true,
            message: "Login Successful",
            data : token
        });

    } catch (error) {
        console.log("Error in login route:", error);
        res.send({
            success: false,
            message: error.message,
        });
    }
});

//get logged in user details
router.get("/get-logged-in-user" , authMiddleware, async(req,res) => {
    try {
        console.log(req.body.userIdFromToken)
       const user = await User.findById(req.body.userIdFromToken);
       if(!user){
        return res.send({
            success: false,
            message: "User does not exist",
        });
       }
       return res.send({
        success: true,
        message: "User details fetched successfully",
        data: user,
       })
    } catch (error) {
        console.log("Error in get-logged-in-user route:", error);
        return res.send({
            success: false,
            message: error.message,
        });
    }
});

// Update User Details by Email
router.put("/update-details", async (req, res) => {
    try {
        const { email, ...updateData } = req.body;
        const user = await User.findOneAndUpdate({ email }, updateData, { new: true }).select("-password");
        if (!user) {
            return res.send({
                success: false,
                message: "User not found",
            });
        }
        return res.send({
            success: true,
            message: "User details updated successfully",
            data: user,
        });
    } catch (error) {
        console.log("Error in update-details route:", error);
        return res.send({
            success: false,
            message: error.message,
        });
    }
});

// Delete User Profile by Email
router.delete("/delete-profile", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find the user by email
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.send({
                success: false,
                message: "User not found",
            });
        }

        // Verify password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.send({
                success: false,
                message: "Incorrect password. Profile deletion failed.",
            });
        }

        // If password is correct, delete the user profile
        await User.findOneAndDelete({ email });

        return res.send({
            success: true,
            message: "User profile deleted successfully",
        });
    } catch (error) {
        console.log("Error in delete-profile route:", error);
        return res.send({
            success: false,
            message: error.message,
        });
    }
});


// Update Password by Email with Previous Passwords
router.put("/update-password", async (req, res) => {
    try {
        const { email, oldPassword, newPassword } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.send({
                success: false,
                message: "User not found",
            });
        }

        const validPassword = await bcrypt.compare(oldPassword, user.password);
        if (!validPassword) {
            return res.send({
                success: false,
                message: "Invalid old password",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedPassword;
        await user.save();

        return res.send({
            success: true,
            message: "Password updated successfully",
        });
    } catch (error) {
        console.log("Error in update-password route:", error);
        return res.send({
            success: false,
            message: error.message,
        });
    }
});

// Get all user details
router.get("/users-list", authMiddleware, async (req, res) => {
    try {
        const users = await User.find({}).select('-password'); // Excluding the password from the result
        return res.send({
            success: true,
            message: "All users fetched successfully",
            data: users
        });
    } catch (error) {
        console.log("Error in fetching all users:", error);
        res.send({
            success: false,
            message: error.message
        });
    }
});


module.exports = router;
