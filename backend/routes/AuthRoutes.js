const express = require("express");
const { signUser, logUserIn } = require("../controllers/userController");
const router = express.Router();
// for the user to create an account
router.post("/signup", signUser);

//for the user to log into their account
router.post("/login", logUserIn);

module.exports = router;
