var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(function(req, res, next){
  console.log(bodyParser)
  bodyParser.urlencoded({extended: false})
  next()
})


function getTheTime(){
  return new Date().toString();
}

app.get("/now", function(req, res, next) {
  req.time = getTheTime();
  next();
},function(req, res) {
  res.json({ time: req.time });
});

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



app.get("/:word/echo", function(req, res) {
  res.json({ echo: req.params.word });
})

app.get("/name", function(req, res) {
  res.json({ name: req.query.first + " " + req.query.last})
})































 module.exports = app;
