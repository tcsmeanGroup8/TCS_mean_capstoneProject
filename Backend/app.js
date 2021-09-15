// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
//let routerProduct = require("./router/product.router");
//let userRouter = require("./router/user.router");
let routerFunds = require("./router/funds.router");
let routerStatus = require("./router/status.router");
let routerEmployee = require("./router/employee.router");

// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//url database 
let url = "mongodb://localhost:27017/tcsmean"

// connect the database 
mongoose.connect(url).
then(res=>console.log("connected")).
catch(error=>console.log(error));

// middleware which help to match main path and pass the
// request to router file. 
// http://localhost:9090/api/product/getAllProducts     : Get 
// http://localhost:9090/api/product/storeProduct       : Post 
// http://localhost:9090/api/product/deleteProduct       : Delete 
// http://localhost:9090/api/product/updateProduct       : Update 

//app.use("/api/product",routerProduct);

// http://localhost:9090/api/user/signUp        : post signup 
// http://localhost:9090/api/user/signIn        : post signIn
//app.use("/api/user",userRouter);

// http://localhost:9090/funds/fetchFunds           : Get 
// http://localhost:9090/funds/createFundsAccount   : Post 
// http://localhost:9090/funds/deleteFundsAccount   : Delete 
// http://localhost:9090/funds/addFunds             : Update 
// http://localhost:9090/funds/subtractFunds        : Update
app.use("/funds",routerFunds);

// http://localhost:9090/status/fetchStatus         : Get 
// http://localhost:9090/status/createStatus        : Post 
// http://localhost:9090/status/deleteStatus        : Delete 
// http://localhost:9090/status/updateStatus        : Update 
app.use("/status",routerStatus);

// http://localhost:9090/employee/loginEmployee     : Post 
// http://localhost:9090/employee/changePassword    : Post 
// http://localhost:9090/employee/panel             : Post 
app.use("/employee",routerEmployee);

/*app.get("/", (req, res) => {
    res.sendFile(__dirname + "/tempHTML/tempIndex.html");
})*/

app.get("/funding", (req, res) => {
    res.sendFile(__dirname + "/tempHTML/funding.html");
})

app.get("/employees", (req, res) => {
    res.sendFile(__dirname + "/tempHTML/employee.html");
})

app.get("/orderStatus", (req, res) => {
    res.sendFile(__dirname + "/tempHTML/orderStatus.html");
})

app.listen(9090,()=>console.log("Server running on port number 9090"))