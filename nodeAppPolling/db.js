var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'test'
});

connection.connect();

var prevalue = 0;

exports.initdb = function(callback) {
  records(function(err, rows){
    if(err){
      // error
    }else{      
      if(rows[0].total > prevalue){
        var diff = rows[0].total - prevalue;
        prevalue = rows[0].total;
        query("Select * from poll order by id desc limit "+diff, callback);
      }
    }
  });

}

function records(cb) {
  var res = connection.query("Select count(*) as total from poll", function(err, rows, fields) {
  if (err)
    return cb(err);
  cb(null,rows);
  });
}

function query(queryString, callback) {
  var res = connection.query(queryString, function(err, rows, fields) {
  if (err)
    return callback(err);
  callback(null,rows);
  });
}
