var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

app.use("/public", express.static(__dirname + "/public"));

console.log("Hello World")



































 module.exports = app;
