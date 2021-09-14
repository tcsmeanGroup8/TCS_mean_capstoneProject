//load the module
let mongoose = require("mongoose");

//avoid s and lower case
mongoose.pluralize(null);

let ticketSchema = mongoose.Schema({
    _id:String,
    description:String
})

//using schema creating model
let ticketModel = mongoose.model("Ticket",ticketSchema);

//export here and import in another file using require
module.exports = ticketModel;
