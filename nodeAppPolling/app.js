var express = require('express');
var _ = require('underscore');
var unirest = require('unirest');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var http = require("http");
var db = require('./db');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

setInterval(function(){
  console.log('polling');
  db.initdb(function(err,rows) {
    if (err) {
      // do something with the error
    } else {
        _.each(rows, function(one) {
        unirest.post('http://localhost:3000/Tasks')
        .type('json')
        .send(JSON.stringify(one))
        .end(function (response) {
          console.log(response.body);
        })
      });
  }
  });
}, 3000);


module.exports = app;
