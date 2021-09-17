let express = require("express");

let router = express.Router();

let employeeController = require("../controller/employee.controller");

router.post("/loginEmployee", employeeController.loginEmployee);
router.post("/changePassword", employeeController.EMPchangePassword);
router.post("/addEmployee", employeeController.addEmployee)


module.exports = router;