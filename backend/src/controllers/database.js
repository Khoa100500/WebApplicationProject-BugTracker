const mysql = require('mysql2');
const config = require('../config');

// Test database connection
const connection = mysql.createConnection(config.MYSQL_CONFIG);
connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
})
connection.end()

// Use connection pool
const pool = mysql.createPool(config.MYSQL_CONFIG);

module.exports = pool.promise();