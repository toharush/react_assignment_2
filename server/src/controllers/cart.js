const cartModel = require("../models/cart");

exports.createCart = async (cartItems) => {
  return await new cartModel({ items: cartItems }).save();
};
