let statusModel = require("../model/status.model");

let fetchStatus = (request,response)=>{
    let user = request.body.email;
    statusModel.find({email: user},(err,data)=>{
        if(!err){
            if (data != undefined) {
                response.send(data);
            }
            else {
                response.send("0");
            }
        }
        else{
            console.log(err);
            response.send("0");
        }
    })
}

let createStatus = (request,response)=> {
    let order = request.body;
    let cartTotal = 0;
    for (let i = 0; i < order.cart.length; ++i) {
        cartTotal += order.cart[i].price;
    }
    let today = new Date().toISOString().slice(0, 10);
    let status = "Order Submitted";
    let newStatus = JSON.parse("{\"email\":\"" + order.email + "\", \"status\":\"" + status + "\", \"total\":" + String(cartTotal) + ", \"date\":\"" + String(today) + "\", \"cart\":" + JSON.stringify(order.cart) + "}");
    statusModel.insertMany(newStatus,(err,result)=> {
        if(!err){
            console.log("New order status has been created for " + order.email);
            response.send(String(cartTotal));
        }
        else {
            console.log(err);
            response.send("0");
        }
    })
}

let deleteStatus = (request,response)=> {
    let user = request.body;
    let orderID = user.userID;
    statusModel.deleteOne({_id:orderID},(err,result)=> {
        if(!err){
            console.log("Successfully deleted order status for " + orderID);
        }
        else {
            console.log(err);
        }
    })
}

let updateStatus = (request,response)=> {
    let status = request.body;
    let userID = status.userID;
    console.log(status);
    for (let s in status) {
        if (!status[s]) {
            delete status[s];
        }
    }
    statusModel.updateMany({email: userID},{$set: {status}},(err,result)=> {
        if(!err){
            console.log("Successfully updated order statuses for " + userID);
            response.send("1");
        }
        else {
            console.log(err);
            response.send("0");
        }
    })
}

module.exports = {fetchStatus, createStatus, deleteStatus, updateStatus, createStatus}