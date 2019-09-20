//server.js 
var express = require("express");
var path = require("path");
var app = express();
var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public')); 

// Home.html
app.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"./views/home.html"));
});

// about.html
app.get("/about",function(req, res){
    res.sendFile(path.join(__dirname,"./views/about.html"));
});

// access PORT 
app.listen(HTTP_PORT);