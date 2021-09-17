let mongoose = require("mongoose");

mongoose.pluralize(null);

let statusSchema = mongoose.Schema({
    email:String,
    status:String,
    total:Number,
    date:Date,
    cart:Array
});

let statusModel = mongoose.model("OrderStatus",statusSchema);

module.exports = statusModel;