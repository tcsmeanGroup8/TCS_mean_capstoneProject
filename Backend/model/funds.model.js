let mongoose = require("mongoose");

mongoose.pluralize(null);

let fundsSchema = mongoose.Schema({
    _id:Number,
    name:String,
    amount:Number
});

let fundsModel = mongoose.model("Fund",fundsSchema);

module.exports = fundsModel;