/*********************************************************************************
* WEB322 – Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
* of this assignment has been copied manually or electronically from any other source
* (including 3rd party web sites) or distributed to other students. *
* Name: Mintae Kim  Student ID: 141915181  Date: Sep 27, 2019 *
* Online (Heroku) Link: https://desolate-taiga-79915.herokuapp.com/
* ********************************************************************************/

// connect data-service.js
var dataService = require("./data-service");
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
// addEmployee.html
app.get("/employees/add",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/addEmployee.html"));
});
// addImage.html
app.get("/images/add",(req, res)=>{
    res.sendFile(path.join(__dirname,"/views/addImage.html"));
});
// employees
app.get("/employees",function(req, res){
    dataService.getAllEmployees().then((data)=>{
        return res.json(data);
    }).catch((err)=>{
        return res.json({message: err});
    });
});

// managers
app.get("/managers",function(req, res){
    dataService.getManagers().then((data)=> {
        return res.json(data);
    }).catch((err)=>{
        return res.json({message: err});
    });
});

// departments
app.get("/departments",function(req, res){
    dataService.getDepartments().then((data)=>{
        return res.json(data);
    }).catch((err)=>{
        return res.json({message: err});
    });
});

// No matching route
app.use(function(req, res){
    res.status(404).sendFile(path.join(__dirname,"./views/error.html"));
})

// access PORT 
dataService.initialize().then((data)=>{
    app.listen(HTTP_PORT, function(){
        console.log(`Express http server listening on $${HTTP_PORT}`)
    });
}).catch((data)=>{
    console.log("No initializing");
});
