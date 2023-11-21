require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./DB/dbConnection.js');
const PORT = process.env.PORT;

const usersRoute = require('./routes/usersRoute.js');
const ordersRoute = require('./routes/ordersRoute.js');

app.use(express.json());

app.use(`/v1/api/users/`, usersRoute);
app.use(`/v1/api/orders/`, ordersRoute);

// Test landing page
app.get(`/`, (req, res) => {
  res.json('Hello!');
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
