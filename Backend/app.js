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
//================= Routers =====================
let adminRouter = require("./router/admin.router");
let userRouter = require("./router/user.router");
let productRouter = require("./router/product.router");
// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }));

//url database 
let url = "mongodb+srv://sathwikakatam:Sathwika123@cluster0.xcudk.mongodb.net/TataStores?retryWrites=true&w=majority"

// connect the database 
mongoose.connect(url).
then(res=>console.log("connected")).
catch(error=>console.log(error));


app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

app.use("/api/funds",routerFunds);
app.use("/api/status",routerStatus);
app.use("/api/employee",routerEmployee);
app.use("/api/product",productRouter);

/*app.get("/", (req, res) => {
    res.sendFile(__dirname + "/tempHTML/tempIndex.html");
})

app.get("/funding", (req, res) => {
    res.sendFile(__dirname + "/tempHTML/funding.html");
})

app.get("/employees", (req, res) => {
    res.sendFile(__dirname + "/tempHTML/employee.html");
})

app.get("/orderStatus", (req, res) => {
    res.sendFile(__dirname + "/tempHTML/orderStatus.html");
})*/

app.listen(9090,()=>console.log("Server running on port number 9090"))