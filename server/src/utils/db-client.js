const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("DB Connected"));

module.exports = db;
