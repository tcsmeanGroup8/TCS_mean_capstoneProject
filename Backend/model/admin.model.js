let mongoose = require("mongoose");

mongoose.pluralize(null);

let adminSchema = mongoose.Schema({
    userName: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

let adminModel = mongoose.model("admin", adminSchema);

module.exports = adminModel;