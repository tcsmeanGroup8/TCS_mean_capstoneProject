let mongoose = require("mongoose");

mongoose.pluralize(null);

let statusSchema = mongoose.Schema({
    email:String,
    status:String,
    total:Number,
    date:String,
    cart:Array
});

let statusModel = mongoose.model("OrderStatus",statusSchema);

module.exports = statusModel;