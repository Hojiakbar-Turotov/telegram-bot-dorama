const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(res => {
    console.log("connected to db")
}).catch(err => console.log(err))

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.json("Success")
})
