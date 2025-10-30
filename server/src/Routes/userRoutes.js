const express = require("express");
const { userLogin } = require("../Controllers/userController");

const router = express.Router();

router.post("/login", userLogin);

module.exports = router;