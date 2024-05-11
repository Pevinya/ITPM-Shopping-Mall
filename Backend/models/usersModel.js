const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //trim: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: "user",
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'pending'],
        default: "pending",
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    city: {
        type: String,
    },
    
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
