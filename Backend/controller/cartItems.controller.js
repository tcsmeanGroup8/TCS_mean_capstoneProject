//load the modules
let express = require("express");
let cartProductModel = require("../model/cartItems.model");
let productModel = require("../model/product.model");

//view cart
let viewCart = (request,response)=>{
    modelCart.find({userId:request.params.userId},(err,result)=>{
        if(!err){
            response.send(result);
        }else{
            response.send(err);
        }
    })
}


//add to cart
let createCart = (request,response)=>{
    let items = new modelCart({
        pid:request.body._id,
        name:request.body.name,
        quantity:request.body.quantity,
        price:request.body.price,
        userId:request.body.userId,
        imageId:request.body.imageId
    });

    modelCart.findOne({pid:request.body._id,userId:request.body.userId},(err,result)=>{
        if(result === null){
            items.save((err,result)=>{
                if(!err){
                    response.send(result);
                }else{
                    response.send(err);
                }
            })
        }else{
            productModel.find({_id:request.body._id,userId:request.body.userId},(err,result)=>{
                itemNum = parseInt(request.body.quantity);
                changeQuantity = result.quantity + itemNum;
                if(result[0].quantity+1>changeQuantity){
                    console.log("Quantity updated");
                    modelCart.updateOne({pid:request.body._id,userId:request.body.userId},{$set:{quantity:changeQuantity}},(err,result)=>{
                        if(!err){
                            console.log(result);
                        }else{
                            console.log(err);
                        }
                    })
                }else{
                    console.log("No change due to not enough in stock");
                }
            })
        }
    })
}

//cart update
let updateCart = (request,response)=>{
    modelCart.updateOne({pid:request.body.pid,userId:request.body.userId},{$set:{quantity:request.body.quantity}},(err,result)=>{
        if(!err){
            response.send("Update success");
        }else{
            response.send("Failure");
        }
    })
}

//object selection
let objectSelect=(request,response)=>{
    productModel.find({},(err,result)=>{
        if(!err){
            response.send(result);
        }else{
            response.send(err);
        }
    })
}

let deleteCart = (request,response)=>{
    let cart=JSON.parse(request.params.pid);
    modelCart.deleteMany({pid:cart.pid,userId:cart.userId},(err,result)=>{
        if(!err){
            response.send("Item deleted successfully");
        }else{
            response.send("Failure to delete");
        }
    })
}

module.exports={viewCart,createCart,deleteCart,updateCart,objectSelect}