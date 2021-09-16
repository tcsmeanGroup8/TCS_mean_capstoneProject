let userModel = require("../model/user.model");

let signUp = async (request, response) => {
    let user = request.body; // receive the data from post method
    let userInfo = await userModel.findOne({
        email: user.email
    });
    if (userInfo == null) {
        let result = await userModel.insertMany(user);
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

let unlockUser = (id) => {
    userModel.updateOne({
        _id: id
    }, {
        $set: {
            isLocked: false
        }
    }, (err, result) => {})
}

module.exports = {
    signIn,
    signUp,
    unlockUser
}