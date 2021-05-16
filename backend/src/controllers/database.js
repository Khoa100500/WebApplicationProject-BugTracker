const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.MYSQL_CONFIG);

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
})

module.exports = connection;