let statusModel = require("../model/status.model");

let fetchStatus = (request,response)=>{
    let orderID = "1"; //TODO get order id here
    statusModel.find({_id: orderID},(err,data)=>{
        if(!err){
            response.send(data);
        }
        else{
            console.log(err);
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
    let newStatus = JSON.parse("{\"email\":\"" + order.email + "\", \"status\":\"" + status + "\", \"total\":" + String(cartTotal) + ", \"Date\":\"" + String(today) + "\", \"cart\":[" + JSON.stringify(order.cart) + "]}");
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
    let orderID = 1; //TODO get user id here
    statusModel.deleteOne({_id:orderID},(err,result)=> {
        if(!err){
            console.log("Successfully deleted order status for " + orderID);
        }
        else {
            console.log(err);
        }
    })
    response.redirect("/orderStatus"); //TODO change redirect to home page (after creation)
}

let updateStatus = (request,response)=> {
    let orderID = 1; //TODO get user id here
    let newCS = (request.body.cs == "") ? undefined : request.body.cs;  //if field is empty(equals "") then replace with undefined so it doesn't overwrite old data.
    let newCC = (request.body.cc == "") ? undefined : request.body.cc;
    let newDS = (request.body.ds == "") ? undefined : request.body.ds;
    let newDC = (request.body.dc == "") ? undefined : request.body.dc;
    statusModel.updateOne({_id: orderID},{$set: {current_State: newCS, current_Country: newCC, destination_State: newDS, destination_Country: newDC}},(err,result)=> {
        if(!err){
            console.log("Successfully updated order status " + String(orderID) + " to Current = [" + newCS + ", " + newCC + "], Destination = [" + newDS + ", " + newDC + "]");
        }
        else {
            console.log(err);
        }
    })
    response.redirect("/orderStatus"); //TODO change redirect to home page (after creation)
}

module.exports = {fetchStatus, createStatus, deleteStatus, updateStatus, createStatus}