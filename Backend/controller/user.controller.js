let userModel = require("../model/user.model");
let fundsModel = require("../model/funds.model");

let signUp = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let mongoUser = JSON.parse("{\"fname\":\"" + user.firstname + "\", \"lname\":\"" + user.lastname + "\", \"email\":\"" + user.email + "\", \"password\":\"" + user.password + "\", \"addr\":\"" + user.address + "\", \"dob\":\"" + user.dob + "\", \"phone\":\"" + user.phone + "\", \"ticket\":\"false\", \"loginAttempt\":\"0\"}");
    let userInfo = await userModel.findOne({email:user.email});
    if(userInfo==null){
        let result = await userModel.insertMany(mongoUser);
        response.send("Account created successfully");
    } else {
        response.send("Email ID must be unqiue");
    }
}

let signIn = async (request, response) => {
    let user = request.body; // receive the data from post method
    let userInfo = await userModel.findOne({
        email: user.email,
        password: user.password
    });
    if (userInfo != null) {
        response.send("Success");
    } else {
        response.send("InValid username or password, please try again.");
    }
}

let editUser = async (request,response)=> {
    let user = request.body;
    let userID = user.userID;
    console.log(userID);
    for (let u in user) {
        if (!user[u]) {
            delete user[u];
        }
    }
    let temp = userModel.updateOne({email: userID},{$set: user},(err,result)=> {
        if(!err){
            console.log("Successfully updated user info");
        }
        else {
            console.log(err);
        }
    })
    let newEmail = user.email;
    console.log(userID);
    let temp2 = fundsModel.updateOne({email: userID},{$set: {email:newEmail}},(err,result)=> {
        if(!err){
            console.log("Successfully updated user funds account");
            response.send("1");
        }
        else {
            console.log(err);
            response.send("2");
        }
    })
    
}

let unlockUser = (id) => {
    userModel.updateOne({
        _id: id
    }, {
        $set: {
            isLocked: false
        }
    }, (err, result) => {})
}

module.exports={signIn,signUp,editUser,unlockUser}