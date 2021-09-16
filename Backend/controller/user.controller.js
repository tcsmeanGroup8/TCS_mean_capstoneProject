let userModel = require("../model/user.model");

let signUp = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let mongoUser = JSON.parse("{\"fname\":\"" + user.firstname + "\", \"lname\":\"" + user.lastname + "\", \"email\":\"" + user.email + "\", \"password\":\"" + user.password + "\", \"addr\":\"" + user.address + "\", \"dob\":\"" + user.dob + "\", \"phone\":\"" + user.phone + "\", \"ticket\":\"false\", \"loginAttempt\":\"0\"}");
    let userInfo = await userModel.findOne({email:user.email});
    if(userInfo==null){
        let result = await userModel.insertMany(mongoUser);
        response.send("Account created successfully");
    }else {
        response.send("Email ID must be unqiue");
    }    
}

let signIn = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let userInfo = await userModel.findOne({email:user.email,password:user.password});
    if(userInfo!=null){
        response.send("Success");      
    }else {
        response.send("InValid username or password, please try again.");
    }
}

let editUser = async (request,response)=> {
    let user = request.body;
    for (let u in user) {
        if (!user[u]) {
            delete user[u];
        }
    }
    userModel.updateOne({email: user.userID},{$set: user},(err,result)=> {
        if(!err){
            console.log("Successfully updated user info");
            response.send("1");
        }
        else {
            console.log(err);
            response.send("2");
        }
    })
}

module.exports={signIn,signUp,editUser}