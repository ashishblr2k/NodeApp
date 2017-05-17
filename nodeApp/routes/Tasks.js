var express = require('express');
var router = express.Router();
var Task=require('../models/Task');

router.post('/',function(req,res,next){

  Task.addTask(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else{
      res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
  });
});

module.exports=router;
