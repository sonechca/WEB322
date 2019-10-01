var employees = new Array();
var departments = new Array();
var fs = require('fs');

module.exports.initialize = function(){
   
    return new Promise((resolve, reject)=>{
        
        fs.readFile('data/employees.json','utf8',(err,data)=>{
            if(err){
                reject("unable to read file")
            }
            employees = JSON.parse(data);
        });

        fs.readFile('data/departments.json','utf8',(err,data)=>{
            if(err){
                reject("unable to read file")
            };
            departments =JSON.parse(data);
        });
    
        resolve("success");
        
    });
}

module.exports.getAllEmployees = function(){
    return new Promise((resolve, reject)=>{
        
        if(employees.length == 0){
            reject("no results returned");
        }
        else{
            resolve(employees);
        }
        
    });
}

module.exports.getManagers = function(){
    var manager = new Array();
    return new Promise((resolve, reject)=>{
        for(let i = 0; i < employees.length; i++){
            if(employees[i].isManager == true){
                manager.push(employees[i]);
            }
        }
        if(manager.length == 0){
            reject("no result returned");
        }
        else{
            resolve(manager);
        }
    });
}

module.exports.getDepartments = function(){
    return new Promise((resolve, reject)=>{
        
        if(departments.length == 0){
            reject("no results returned");
        }
        else{
            resolve(departments);
        }
    });
}