const express = require("express");
const app = express();
const restRouter= require("../routes/restaurants.js")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/restaurants", restRouter)



module.exports = app;