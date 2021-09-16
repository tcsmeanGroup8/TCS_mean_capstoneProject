let requestModel = require("../model/request.model.js");

let sendRequest = (req, res) => {

    let request = new requestModel({
        product_id: req.body.product_id,
        quantity: req.body.quantity,
        price: req.body.price
    });

    request.save((err, result) => {
        if (!err) {
            res.send("request sent successfully ")
        } else {
            res.send(err);
        }
    })

}


module.exports = {
    sendRequest,
}