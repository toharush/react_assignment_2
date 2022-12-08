const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    items: [],
  },
  {
    collection: "cart",
  }
);

module.exports = mongoose.model("cart", cartSchema);
