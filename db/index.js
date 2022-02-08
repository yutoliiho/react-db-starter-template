const mysql = require('mysql');

var connection = mysql.createConnection({

  // host: '172.17.0.2',
  // host: 'localhost',
  socketPath: '/tmp/mysql.sock',
  // port: '3306',
  // timeout: 60000,
  user: 'root',
  password: '',
  database: 'shopping_list',



});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err + err.stack);
    console.error('more eorr message: ' + err);
    return;
  }
  console.log('connected to DB');
});

module.exports = connection;