//load the model file ie user-defined module
let productModel = require("../model/product.model");
let userModel = require("../model/user.model");

//add products
let addProduct = (request,response)=> {
    let product = new productModel({
        name:request.body.name,
        quantity:request.body.quantity,
        price:request.body.price
    });
    userModel.updateOne({email: request.body.userID}, {$push: {cart: product}},(err,data)=>{
        if(!err){
            console.log("Successfully added new product to cart " + request.body.userID);
            response.send("1");
        }
        else{
            console.log(err);
            response.send("2");
        }
    })

}

//deleting products by id
let deleteProduct = (request,response)=> {
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

//getting all the products 
let getAll = (request, response) => {
    let user = request.body.userID;
    userModel.find({email: request.body.userID},(err,data)=>{
        if(!err){
            console.log("User: " + user + " has " + data[0].cart.length + " items in their cart");
            response.send(String(data[0].cart.length));
        }
        else{
            console.log(err);
            response.send("0");
        }
    })
};



//update product by id
let updateProduct = (request,response)=> {
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

module.exports = {addProduct,deleteProduct,getAll,updateProduct,selectProductById,getProductDetails}