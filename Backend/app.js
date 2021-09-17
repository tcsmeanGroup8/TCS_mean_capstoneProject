// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

//================= Routers =====================
let routerFunds = require("./router/funds.router");
let routerStatus = require("./router/status.router");
let routerEmployee = require("./router/employee.router");
let adminRouter = require("./router/admin.router");
let userRouter = require("./router/user.router");
let productRouter = require("./router/product.router");
// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json())

//url database 
let url = "mongodb+srv://sathwikakatam:Sathwika123@cluster0.xcudk.mongodb.net/TataStores?retryWrites=true&w=majority";

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

app.listen(9090,()=>console.log("Server running on port number 9090"))