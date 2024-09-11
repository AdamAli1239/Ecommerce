const express = require("express");

const router = express.Router();
// GET all the tops available
router.get("/tops", () => {});

// GET all the bottoms available
router.get("/bottoms", () => {});
// GET all the sweaters available
router.get("/sweaters", () => {});
// GET all the pants available
router.get("/pants", () => {});
// GET all the t-shirts available
router.get("/t-shirts", () => {});
// GET all the shorts available
router.get("/shorts", () => {});
// GET all the socks available
router.get("/socks", () => {});

module.exports = router;
