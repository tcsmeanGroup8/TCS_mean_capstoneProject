let express = require("express");

let router = express.Router();

let statusController = require("../controller/status.controller");

router.post("/fetchStatus", statusController.fetchStatus);   //use when you need to display status (return status)
router.post("/createStatus", statusController.createStatus); //use when creating status after checkout (creating new status)
router.post("/deleteStatus", statusController.deleteStatus); //use when deleting order (delete status if needed)
router.post("/updateStatus", statusController.updateStatus); //use when updating status (update status)

module.exports = router;