const mysql = require('mysql2')
const config = require('../config')
const bcrypt = require('bcrypt')

// Test database connection
const connection = mysql.createConnection(config.MYSQL_CONFIG)
connection.connect((err) => {
  if (err) throw err
  console.log("Database connected")
})
connection.end()

// new password to hash
const password = 'admin'
bcrypt.hash(password, config.saltRounds).then((hashed) => {
  console.log(`${password} -> ${hashed}`)
})

// Use connection pool with Promise support
const pool = mysql.createPool(config.MYSQL_CONFIG).promise()

module.exports = pool