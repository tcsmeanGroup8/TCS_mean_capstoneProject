let express = require("express");
let router = express.Router();
let requestController = require("../controller/request.controller.js");

router.post("/sendRequest", requestController.sendRequest);


module.exports = router;