let mongoose = require("mongoose");
let productModel = require("../model/product.model");
mongoose.Promise = global.Promise;

let userSchema = mongoose.Schema({
   userName: String,
   pass: String,
   fname: String,
   lname: String,
   email: String,
   addr: String,
   dob: Date,
   fund: Number,
   ticket: Boolean,
   loginAttempt: Number,
   phoneNum: String,
   isLocked: Boolean,
   cart: Array
});

let UserModel= mongoose.model(" ", userSchema, "usersTable");

module.exports = UserModel;