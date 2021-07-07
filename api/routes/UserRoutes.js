const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserControllers.js");

router.get("/whoami", userController.whoami);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);



module.exports = router;