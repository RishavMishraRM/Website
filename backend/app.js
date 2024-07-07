const express = require('express');
const app = express();
require("dotenv").config();
require("./conn/conn");


// to open app.js in browser
//app.get("/", (req, res) => {
//    res.send("Hello from backend side");
//});

 //creating port
 app.listen(process.env.PORT, () => {
    console.log(`Server Started at port ${process.env.PORT}`);
 });

