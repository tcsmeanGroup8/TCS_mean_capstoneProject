let express = require("express");
let router = express.Router();

let productController = require("../controller/product.controller");



router.post("/addProduct", productController.addProduct);
router.post("/deleteProduct", productController.deleteProduct);
router.post("/updateProduct",productController.updateProduct);
router.post("/getAllProducts",productController.getAll);


module.exports = router;