const maionRouter = require("./src/routes/main");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

dotenv.config();

require("./src/utils/db-client");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1", maionRouter);

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));
