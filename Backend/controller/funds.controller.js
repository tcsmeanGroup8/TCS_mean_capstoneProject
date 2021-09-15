let fundsModel = require("../model/funds.model");

let fetchFunds = (request,response)=>{
    let userID = 1; //TODO get user id here
    fundsModel.find({_id: userID},(err,data)=>{
        if(!err){
            response.send(data);
        }
        else{
            console.log(err);
        }
    })
}

let createFundsAccount = (request,response)=> {
    let userID = 1; //TODO get user id here
    let userName = "a"; //TODO get user name here
    let startingAmount = "1000";
    let newAccount = JSON.parse("{\"_id\":" + userID + ", \"name\":\"" + userName + "\", \"amount\":" + startingAmount + "}");
    fundsModel.insertMany(newAccount,(err,result)=> {
        if(!err){
            console.log("New funds account has been created for " + userID);
        }
        else {
            console.log(err);
        }
    })
    response.redirect("/funding"); //TODO change redirect to home page (after creation)
}

let deleteFundsAccount = (request,response)=> {
    let userID = 1; //TODO get user id here
    fundsModel.deleteOne({_id:userID},(err,result)=> {
        if(!err){
            console.log("Successfully deleted funds account for " + userID);
        }
        else {
            console.log(err);
        }
    })
    response.redirect("/funding"); //TODO change redirect to home page (after creation)
}

let addFunds = (request,response)=> {
    let userID = 1; //TODO get user id here
    let deposit = request.body.amount;
    fundsModel.updateOne({_id: userID},{$inc: {amount: deposit}},(err,result)=> {
        if(!err){
            console.log("Successfully added " + deposit + " into account number " + userID);
        }
        else {
            console.log(err);
        }
    })
    response.redirect("/funding"); //TODO change redirect to home page (after creation)
}

let subtractFunds = (request,response)=> {
    let userID = 1; //TODO get user id here
    let cost = request.body.cost * -1;   //TODO get user cost
    fundsModel.updateOne({_id: userID},{$inc: {amount: cost}},(err,result)=> {
        if(!err){
            console.log("Successfully subtracted " + cost + " from account number " + userID);
        }
        else {
            console.log(err);
        }
    })
    response.redirect("/funding"); //TODO change redirect to home page (after creation)
}

module.exports = {fetchFunds, subtractFunds, addFunds, createFundsAccount, deleteFundsAccount}