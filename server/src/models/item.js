const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    _id: String,
    name: String,
    price: Number,
    description: String,
    imgaePath: String,
  },
  {
    collection: "item",
  }
);

module.exports = mongoose.model("item", itemSchema);
