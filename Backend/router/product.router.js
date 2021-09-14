//load the express module
let express = require("express");

//this is used to create the router reference
//which help to route to controller function based upon the sub-path
let router = express.Router();

let productController = require("../controller/product.controller");

router.get("/getAllProductDetails",productController.getAllProductDetails);
router.post("/storeProduct",productController.storedProductInfo);
router.delete("/deleteProduct/:pid",productController.deleteProductInfo);
router.put("/updateProduct",productController.updateProductDetails);

module.exports = router;