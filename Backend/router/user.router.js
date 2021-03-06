let express = require("express");
let router = express.Router();
let userController = require("../controller/user.controller");

router.post("/signIn", userController.signIn);
router.post("/signUp", userController.signUp);
router.post("/editProfile", userController.editUser);

module.exports = router;