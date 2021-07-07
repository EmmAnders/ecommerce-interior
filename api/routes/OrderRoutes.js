const express = require("express");
const router = express.Router();

const orderController = require("../controllers/OrderControllers.js");

router.get("", orderController.getAllOrders);
router.get("/:id", orderController.getOrderById);




module.exports = router;