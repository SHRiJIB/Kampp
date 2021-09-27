const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsyncError.js");

const { registerNewUser, login } = require("../controllers/auth.js");

router.post("/register", catchAsync(registerNewUser));

router.post("/login", catchAsync(login));

module.exports = router;
