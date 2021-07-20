const express = require("express");
const router = express.Router();

const pageController = require("../controllers/PageControllers.js");

router.post("/add", pageController.addPage);
router.get("", pageController.getAllPages);

module.exports = router;
