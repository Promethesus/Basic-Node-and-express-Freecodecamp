var express = require('express');
var app = express();

app.use(function mWareFunction( req, res, next){
  var log = req.method + " " + req.path + " - " + req.ip
  console.log(log)
  next()
  })

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
