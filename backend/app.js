const express = require('express');
const app = express();


// to open app.js in browser
//app.get("/", (req, res) => {
//    res.send("Hello from backend side");
//});

 //creating port
 app.listen(1000, () => {
    console.log('Server Started');
 });

