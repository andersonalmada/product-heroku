const express = require("express");
const router = express.Router();

const controller = require("../controllers/user-controller");

router.post("/login", controller.login);
router.get("/logout", controller.logout);
router.post("/", controller.post);

module.exports = router;
