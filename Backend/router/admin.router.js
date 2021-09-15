const express = require("express");
const router = express.Router();
let adminController  = require("../controller/admin.controller");

// get products from database
router.get('/', adminController.getAllProducts);
//   add new prodcuts into database
router.post('/addItem', adminController.addItem);
// delete a product
router.delete('/:id',adminController.deleteItemById);
//update a product
router.put("/:id",adminController.updateItemById);










module.exports = router;
