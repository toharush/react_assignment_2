const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart");

router.post("/", async (req, res) => {
  const result = cartController.createCart(req.body.items);
  res.send(result);
});

module.exports = router;
