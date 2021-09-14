//load the model file ie user-defined module
let productModel = require("../model/product.model");

//add products
let addProductInfo = (request,response)=> {
    let product = new productModel({
        name:request.body.name,
        quantity:request.body.quantity,
        price:request.body.price
    });
    console.log(product);

    product.save((err,result)=>{
        if(!err){
            response.send("Product added successfully");
        }else{
            response.send(err);
        }
    })

}

//deleting products by id
let deleteProductInfo = (request,response)=> {
    let pid = request.params.pid;
    productModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
            if(result.deleteCount>0){
                response.send("Product deleted successfully");
            }else {
            response.send(err);
            }
        }
    })
}

//update product by id
let updateProductDetails = (request,response)=> {
    let pid = request.body.pid;
    let priceChange = request.body.priceChange;
    let changeQuantity = request.body.changeQuantity;
    productModel.updateMany({_id:pid},{$set:{quantity:changeQuantity,price:priceChange}},(err,result)=>{
        if(!err){
            response.send("Product updated successfully");
        }else{
            response.send("Product couldn't find");
        }
    })
}

//selecting product by id
let selectProductById = (request,response)=>{
    let pid = request.params.pid;
    productModel.find({_id:pid},(err,result)=>{
        if(!err){
            response.send(result);
        }else{
            response.send(err);
        }
    })
}

//retrieving all product details
let getProductDetails = (request,response)=>{
    productModel.find({},(err,result)=>{
        if(!err){
            response.send(result);
        }else{
            response.send(err);
        }
    })
}

module.exports = {addProductInfo,deleteProductInfo,updateProductDetails,selectProductById,getProductDetails}