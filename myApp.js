var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

const message = "Hello json";
app.get("/json", 
    (req, res) => res.json(
        {"message": process.env.MESSAGE_STYLE === "uppercase" ? message.toUpperCase() : message
    })
);

app.use("/public", express.static(__dirname + "/public"));


































 module.exports = app;
