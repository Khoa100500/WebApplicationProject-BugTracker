const connection = require('./database')
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

  app.get('/people', (req, res) => {
    connection.query("SELECT * FROM bugtracker.people;", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  })

}