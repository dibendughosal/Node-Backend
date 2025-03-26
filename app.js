require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDB = require('./config/db.js')

// express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

connectToDB(); 
const userRouter = require('./routes/userRoutes.js');

app.use("/", userRouter);

module.exports = app; 