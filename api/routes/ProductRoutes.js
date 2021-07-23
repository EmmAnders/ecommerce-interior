const express = require("express");
const router = express.Router();

const productController = require("../controllers/ProductControllers.js");

router.get("", productController.getAllProducts);
router.get("/categories", productController.getAllCategories); 
router.get("/:categoryId", productController.getProductsByCategory);
router.get("/:id", productController.getProductById);

router.post("/addCategory", productController.addCategory);
router.post("/addProduct", productController.addProduct);
router.post("/deleteProduct", productController.deleteProductById);

module.exports = router;
