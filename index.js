require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());
const userController = require('./controllers/user.controller');

app.use(express.json());

app.use('/user', userController);

app.listen(process.env.PORT, () => {
  console.log(`mysql server running on port ${process.env.PORT}`);
});
