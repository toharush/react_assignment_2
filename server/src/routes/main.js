const express = require("express");
const router = express.Router();
const itemRouter = require("./item");
const cartRouter = require("./cart");

router.use("/item", itemRouter);
router.use("/cart", cartRouter);

module.exports = router;
