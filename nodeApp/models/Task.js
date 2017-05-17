var db=require('../dbconnection'); //reference of dbconnection.js

var Task={
 addTask:function(Task,callback){
 return db.query("Insert into task values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
 }
};
 module.exports=Task;
