var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

const message = "Hello json";
app.get("/json", function (req, res) {
    if(process.env.VAR_NAME === "upperCase") {
    response = { "message": message.toUpperCase() };
  } else {
    response = { "message": message };
  }
}
);

app.use("/public", express.static(__dirname + "/public"));


































 module.exports = app;
