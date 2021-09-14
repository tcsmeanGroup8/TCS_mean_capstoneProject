//load the module
let mongoose = require("mongoose");

//avoid s and lower case
mongoose.pluralize(null);

let cartProductSchema = mongoose.Schema({
    pid:String,
    name:String,
    price:Number,
    quantity:Number,
    userId:String,
    imageId:Number
})

//using schema creating model
let cartProductModel = mongoose.model("CartItems",cartProductSchema);

//export here and import in another file using require
module.exports = cartProductModel;
