let fundsModel = require("../model/funds.model");

let fetchFunds = (request,response)=>{
    let userID = request.body.email;
    console.log(userID);
    fundsModel.find({email: userID},(err,data)=>{
        if(!err){
            if (data != undefined) {
                response.send(String(data[0].amount));
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

let createFundsAccount = (request,response)=> {
    let userID = request.body.email;
    let startingAmount = "1000";
    let newAccount = JSON.parse("{\"email\":\"" + userID +  "\", \"amount\":" + startingAmount + "}");
    fundsModel.insertMany(newAccount,(err,result)=> {
        if(!err){
            console.log("New funds account has been created for " + userID);
            response.send(startingAmount);
        }
        else {
            console.log(err);
            response.send("2");
        }
    })
}

let deleteFundsAccount = (request,response)=> {
    let userID = request.body.email;
    fundsModel.deleteOne({email:userID},(err,result)=> {
        if(!err){
            console.log("Successfully deleted funds account for " + userID);
        }
        else {
            console.log(err);
        }
    })
}

let addFunds = (request,response)=> {
    let userID = request.body.userID;
    let deposit = request.body.amount;
    fundsModel.updateOne({email: userID},{$inc: {amount: deposit}},(err,result)=> {
        if(!err){
            console.log("Successfully added " + deposit + " into account number " + userID);
            response.send("1");
        }
        else {
            console.log(err);
            response.send("Error");
        }
    })

}

let subtractFunds = (request,response)=> {
    let order = request.body;
    let cartTotal = 0;
    for (let i = 0; i < order.cart.length; ++i) {
        cartTotal += order.cart[i].price;
    }
    cartTotal = cartTotal * -1;
    fundsModel.updateOne({email: order.email},{$inc: {amount: cartTotal}},(err,result)=> {
        if(!err){
            console.log("Successfully subtracted " + cartTotal + " from account number " + order.email);
            response.send("1");
        }
        else {
            console.log(err);
            response.send("0");
        }
    })
}

module.exports = {fetchFunds, subtractFunds, addFunds, createFundsAccount, deleteFundsAccount}