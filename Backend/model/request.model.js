let mongoose = require("mongoose");
mongoose.pluralize(null);

let requestSchema = mongoose.Schema({
    _id: Number,
    product_id: Number,
    quantity: Number,
    price: Number,
});

let requestModel = mongoose.model("Request", requestSchema);

module.exports = requestModel;