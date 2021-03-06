var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var Tasks=require('./routes/Tasks');
var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use('/Tasks',Tasks);

module.exports = app;
