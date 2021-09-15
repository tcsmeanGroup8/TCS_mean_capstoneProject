var product = require("../model/product.model");
var mongoose = require('mongoose');


exports.getAllProducts =  function(req,res,next){
    product.find(function(err,Products){
        if(err)
        return next(err);
        res.json(Products);
    });
}

exports.addItem = function(req,res,next){
    product.create(req.body, function(err,product){
        if(err) return next(err);
        res.json(product);
    })
}
exports.deleteItemById = function(req,res,next){
    product.findByIdAndRemove(req.params.id,req.body,function(err,prod){
        if(err) return next(err);
        res.json(prod);
    });
}
exports.updateItemById = function(req,res,next){
    product.updateItemById(req.params.id,req.body,function(err,prod){
        if(err) return next(err);
        res.json(prod);
    });
}