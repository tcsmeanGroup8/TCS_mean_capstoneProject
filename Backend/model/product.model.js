//load the module
let mongoose = require("mongoose");

//avoid s and lower case
mongoose.pluralize(null);

//create the schema
let productSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number
});

//using schema creating model
let productModel = mongoose.model("Item",productSchema);

//export here and import in another file using require
module.exports=productModel;
