var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    _id: String,
    name: String,
    price: Number,
    description: String,
    imgaePath: String
  },
  {
    collection: "item",
  }
);
console.log("Module Success");

module.exports = mongoose.model("item", itemSchema);
