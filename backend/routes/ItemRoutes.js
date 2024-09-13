const express = require("express");
const {
  createItem,
  getTops,
  getBottoms,
  getSweaters,
  getPants,
  getTshirts,
  getShorts,
  getSocks,
} = require("../controllers/productController");
const router = express.Router();
// GET all the tops available
router.get("/tops", getTops);

// GET all the bottoms available
router.get("/bottoms", getBottoms);
// GET all the sweaters available
router.get("/sweaters", getSweaters);
// GET all the pants available
router.get("/pants", getPants);
// GET all the t-shirts available
router.get("/t-shirts", getTshirts);
// GET all the shorts available
router.get("/shorts", getShorts);
// GET all the socks available
router.get("/socks", getSocks);
router.post('/create',createItem)
module.exports = router;
