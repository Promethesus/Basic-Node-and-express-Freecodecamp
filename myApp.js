var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

if (process.env.MESSAGE_STYLE=="uppercase"){
  app.get("/json", function(req, res) {
  return res.json({ "message": "HELLO JSON" })
  });
  }
  else {
  app.get('/json', function(req, res) {
    return res.json({ 'message': 'Hello json' })
  });
  }

app.use("/public", express.static(__dirname + "/public"));


































 module.exports = app;
