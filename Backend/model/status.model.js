let mongoose = require("mongoose");

mongoose.pluralize(null);

let statusSchema = mongoose.Schema({
    _id:String,
    current_State:String,
    current_Country:String,
    destination_State:String,
    destination_Country:String
});

let statusModel = mongoose.model("OrderStatus",statusSchema);

module.exports = statusModel;