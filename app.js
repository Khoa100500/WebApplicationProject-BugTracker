var express = require('express');
var app = express();
var connection = require('./models/db')

var PORT = process.env.PORT || 3002;

app.listen(PORT)

app.get('/people', (req,res) => {
    connection.query("SELECT * FROM bugtracker.people;", (err,result) => {
        if (err) throw err;
        res.send(result);
    });
})

app.get('/bugs', (req,res) => {
  connection.query("SELECT * FROM bugtracker.bug_report;", (err,result) => {
      if (err) throw err;
      res.send(result);
  });
})

app.get('/bugs?staffID=:id', (req,res) => {
    let id = req.param.id;
    let sql = `USE bugtracker; SELECT * FROM bug_report b, work_on w, people p WHERE b.bug_id = w.bug_id AND p.id = ${id}`;
    connection.query(sql, (err,result) => {
        if (err) throw err;
        res.send(result);
    });
  })

  app.post('/bugs', (req,res) => {
    res.send({title: "sdasdasd"})
})

  app.post('/bugs', (req,res) => {
      let title = req.body.title;

      console.log(title)
  })

module.exports = app;
