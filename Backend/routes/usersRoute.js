const express = require("express");
const router = express.Router();
const User = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authiddleware")

// Register a new user
router.post("/register", async (req, res) => {
    try {
        // Check whether user already exists or not
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.send({
                success: false,
                message: "Email already exists",
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10); // Number of salt rounds
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        // Create new user
        const newUser = new User(req.body);
        await newUser.save();
        return res.send({
            success: true,
            message: "User created successfully",
        });
        
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

//login a user
router.post("/login", async (req, res) => {
    try {
        // Check whether user already exists or not
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.send({
                success: false,
                message: "User does not exist",
            });
        }

        // Check if password is correct
        const validPassword = await bcrypt.compare(
            req.body.password,                          //plain password
            user.password                               //encrypted password
        )
        if (!validPassword) {
            return res.send({
                success: false,
                message: "Invalid Password",
            });
        }
        
        //create and assign a token
        const token = jwt.sign({userId: user._id}, process.env.jwt_secret , {expiresIn: "1d"});

       
        return res.send({
        success: true,
        message: "Login Successful",
        data : token
        });


    } catch (error) {
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
        return res.send({
            success: false,
            message: error.message,
        });
    }
})



module.exports = router;
