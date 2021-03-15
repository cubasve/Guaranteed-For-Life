const mongoose = require('mongoose');

const userPurchases = new mongoose.Schema({
    company: String,
    date: String,
});

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    userCompanies: [userPurchases],
}, {
    timestamps: true,
});