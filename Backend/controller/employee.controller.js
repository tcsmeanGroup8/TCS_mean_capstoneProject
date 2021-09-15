let employeeModel = require("../model/employee.model");
let path = require("path");

let loginEmployee = async (request,response)=>{
    let empEmail = request.body.username;
    let empPW = request.body.password;
    let empInfo = await employeeModel.findOne({email: empEmail, password: empPW});
    if (empInfo != null) {
        console.log(empInfo);
        if (empPW == "123") {   //123 is default password for now
            response.sendFile(path.resolve(__dirname + "/../tempHTML/employeeChangePassword.html"));
        }
        else {
            response.redirect("/employee/panel");
        }
    }
    else {
        console.log("Wrong email or password! Try again.");
        response.redirect("/employees"); //TODO redirect to employee login page
    }
}

let EMPchangePassword = (request,response)=>{
    let empEmail = "aaa"; //TODO get emp id here from local storage
    let empPW = request.body.password;
    employeeModel.updateOne({email: empEmail}, {password: empPW},(err,data)=>{
        if(!err){
            console.log("Successfully updated password");
            response.redirect("/employee/panel");
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