const express = require("express");
const router = express.Router();

const productController = require("../controllers/ProductControllers.js");

router.get("", productController.getAllProducts);
router.get("/brands", productController.getAllBrands);
router.get("/colors", productController.getAllProductColors);
router.get("/categories", productController.getAllCategories);
router.get("/subCategories", productController.getAllSubCategories);
router.get("/:categoryId", productController.getProductsByCategory);
router.get("/single/:id", productController.getProductById);

router.post("/addCategory", productController.addCategory);
router.post("/addSubCategory", productController.addSubCategory);
router.post("/addProduct", productController.addProduct);
router.post("/deleteProduct", productController.deleteProductById);

module.exports = router;
