var express = require('express');
var app = express();
absolutePath = __dirname + /public/index.html

app.get("/", function(req, res) {
    res.sendFile(absolutePath);
  });
console.log("Hello World")



































 module.exports = app;
