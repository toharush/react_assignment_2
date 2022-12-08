const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item");

router.get("/", async (req, res) => {
  const result = await itemController.getAllItems();
  res.send(result);
});

module.exports = router;
