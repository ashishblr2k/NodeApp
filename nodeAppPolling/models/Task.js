var db=require('../dbconnection'); //reference of dbconnection.js


var Task = setInterval(function () {

    var count = db.query("Select count(*) from poll");
    console.log('exiting'+count);
    // getAllTasks:function(callback){
    //   return db.query("Select * from task",callback);
    // }
    }, 1000);

module.exports=Task;
