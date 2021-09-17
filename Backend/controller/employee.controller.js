let employeeModel = require("../model/employee.model");
let path = require("path");

let loginEmployee = async (request,response)=>{
    let empEmail = request.body.email;
    let empPW = request.body.password;
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

const addEmployee = async (req, res) => {
    console.log("Adding Employee");
    let employee = req.body;
    console.log(employee);
    let empWithPass = {...employee, "password":"123"};
    await empModel.insertMany([empWithPass], (e, result) => {
        if(e){
            res.status(400).send({"msg":e});
        }else{
            // send 
            res.status(200).send({"msg": "New Employee added successfully", "result": result});
        }
    });
}

// Deleting the Employee by emailid
const deleteEmployee = async (req, res) => {
    let deletedEid = req.params.emailid;
    let r = await empModel.deleteOne({emailid: deletedEid});
    if(r.deletedCount == 0){
        res.status(400).send({"msg": "Employee could not be deleted, please input a valid email id"});
    }else{
        res.status(200).send({"msg": `Employee ${deletedEid} deleted`})
    }
}

let EMPchangePassword = (request,response)=>{
    let empEmail = request.body.email;
    let empPW = request.body.password;
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

module.exports = {loginEmployee, EMPchangePassword, addEmployee, deleteEmployee}