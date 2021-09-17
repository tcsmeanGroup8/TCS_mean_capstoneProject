var product = require("../model/product.model");
let adminModel = require("../model/admin.model");
var mongoose = require('mongoose');


let getAllProducts =  function(req,res,next){
    product.find(function(err,Products){
        if(err)
        return next(err);
        res.json(Products);
    });
}

let addItem = function(req,res,next){
    product.create(req.body, function(err,product){
        if(err) return next(err);
        res.json(product);
    })
}
 let deleteItemById = function(req,res,next){
    product.findByIdAndRemove(req.params.id,req.body,function(err,prod){
        if(err) return next(err);
        res.json(prod);
    });
}
let updateItemById = function(req,res,next){
    product.updateItemById(req.params.id,req.body,function(err,prod){
        if(err) return next(err);
        res.json(prod);
    });
}

let admSignIn = async (request, response) => {
    let user = request.body;
    console.log(user.username, user.password);
    let userInfo = await adminModel.findOne({
        username: user.username,
        password: user.password
    });
    if (userInfo != null) {
        response.send("Success");
    } else {
        response.send("Invalid username or password, please try again.");
    }
}

module.exports={admSignIn,getAllProducts,addItem,deleteItemById,updateItemById}