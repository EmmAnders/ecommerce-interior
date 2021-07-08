const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");

const productController = require("../controllers/ProductControllers.js");

router.get("", productController.getAllProducts);
router.get("/categories", productController.getAllCategories);
router.get("/:id", productController.getProductById);
router.get("/categories/:categoryId", productController.getCategoryById);

router.post("/addCategory", adminAuth, productController.addCategory);
router.post("/addProduct", productController.addProduct);
router.post("/deleteProduct", productController.deleteProductById);

module.exports = router;
