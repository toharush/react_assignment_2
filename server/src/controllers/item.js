const itemModel = require("../models/item");

exports.getAllItems = async () => {
  return await itemModel.find({});
};
