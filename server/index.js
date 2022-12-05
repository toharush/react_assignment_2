const { application } = require('express');
const express = require('express');
const app = express(); 
const maionRouter = require('./src/routes/main');

app.use('/api/v1', maionRouter);

app.listen(process.env.PORT, () => console.log(`App listen on port ${process.env.PORT}`));