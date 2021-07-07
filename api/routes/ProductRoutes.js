const express = require("express");
const router = express.Router();

const productController = require("../controllers/ProductControllers.js");

router.get("", productController.getAllProducts);
router.get("/category/:category", productController.getProductsByCategory);
router.get("/:id", productController.getProductById);

router.post("/addProduct", productController.addProduct);
router.post("/deleteProduct", productController.deleteProductById);


module.exports = router;