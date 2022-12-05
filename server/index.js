const maionRouter = require('./src/routes/main');
const dotenv = require('dotenv');
const express = require('express');
const app = express(); 

dotenv.config();
require('./src/utils/db-client');

const PORT = process.env.PORT || 8080;

app.use('/api/v1', maionRouter);

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));