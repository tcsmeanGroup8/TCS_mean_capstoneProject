let mongoose= require("mongoose");
mongoose.Promise= global.Promise;

let orderSchema= mongoose.Schema({
    _id:Number,
    itemsNames:Array(),
    userName:String,
    status:String,
    total:Number,
    date:Date
});

let OrderModel= mongoose.model("orderTable",orderSchema, "orderTable");

module.exports= OrderModel;