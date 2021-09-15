let employeeModel = require("../model/employee.model");
let path = require("path");

let loginEmployee = async (request,response)=>{
    let empEmail = request.body.email;
    let empPW = request.body.password;
    console.log(empEmail, empPW);
    let empInfo = await employeeModel.findOne({email: empEmail, password: empPW});
    if (empInfo != null) {
        if (empPW == "123") {   //123 is default password for now
            response.send("3");
        }
        else {
            response.send("1");
        }
    }
    else {
        console.log("Wrong email or password! Try again.");
        response.send("2");
    }
}

let EMPchangePassword = (request,response)=>{
    let empEmail = request.body.email;
    let empPW = request.body.password;
    console.log(empEmail, empPW);
    employeeModel.updateOne({email: empEmail}, {password: empPW},(err,data)=>{
        if(!err){
            console.log("Password changed successfully!");
            response.send("1");
        }
        else{
            console.log(err);
        }
    })
}

let gotoEmpPanel = (request,response)=>{
    response.sendFile(path.resolve(__dirname + "/../tempHTML/employeePanel.html"));
}

module.exports = {loginEmployee, EMPchangePassword, gotoEmpPanel}