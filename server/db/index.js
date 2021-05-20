var mysql = require('mysql2');
var password = require('../../config/dbPass.js')
// get the client

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
  database: 'glaze'
});



module.exports = connection;