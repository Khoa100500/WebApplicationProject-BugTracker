var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'dbproject.3utilities.com',
    user: 'khoadeptrai',
    password: 'Yenni1005',
    database: 'bugtracker'
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
})
module.exports = connection;