let express = require("express");

let router = express.Router();

let fundsController = require("../controller/funds.controller");

router.post("/fetchFunds", fundsController.fetchFunds);                 //use when you need funds amount (return funds amount)
router.post("/createFundsAccount", fundsController.createFundsAccount); //use when creating an account (creating new account)
router.post("/deleteFundsAccount", fundsController.deleteFundsAccount); //use when deleting an account (deleting account)
router.post("/addFunds", fundsController.addFunds);                     //use when you need to add funds (adding)
router.post("/subtractFunds", fundsController.subtractFunds);           //use when you need to subtract funds (checkout)

module.exports = router;