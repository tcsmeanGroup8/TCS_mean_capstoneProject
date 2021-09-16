const express = require("express");
const router = express.Router();
const adminController  = require("../controller/admin.controller");
const reportController = require("../controller/report.controller");

// get products from database
router.get('/', adminController.getAllProducts);
//   add new prodcuts into database
router.post('/addItem', adminController.addItem);
// delete a product
router.delete('/:id',adminController.deleteItemById);
//update a product
router.put("/:id",adminController.updateItemById);
//get report by date
router.get("/getReportByDate", reportController.retrieveReportByDate);
//get report by product
router.get("/getReportByProduct", reportController.retrieveReportByProduct);
//get report by email
router.get("/getReportByEmail", reportController.retrieveReportByEmail);










module.exports = router;
