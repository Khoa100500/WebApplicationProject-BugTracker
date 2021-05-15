const connection = require('./database')
const { v4: uuidv4 } = require('uuid');


module.exports = (app) => {

  app.get('/bugs', (req, res) => {
    connection.query("SELECT * FROM bugtracker.bug_report;", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  })

  app.get('/bugs?staffID=:id', (req, res) => {
    let id = req.params.id;
    let sql = `USE bugtracker; SELECT * FROM bug_report b, work_on w, people p WHERE b.bug_id = w.bug_id AND p.id = ${id}`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  })

  app.post('/bugs', (req, res) => {
    const UUID = uuidv4();
    const data = req.body;
    const title = data.title;
    const description = data.description;
    const userID = data.userID;
    const staffID = data.staffID;
    const time = data.updates.time;
    const content = data.updates.content;
    const authorID = data.updates.authorID;

    sql1 = `INSERT INTO bug_report(bug_id,title,bug_description,status) VALUES (UUID_TO_BIN(${UUID}), "${title}", "${description}", 0)`;
    sql2 = `INSERT INTO work_on(bug_id,staffID) VALUES(UUID_TO_BIN(${UUID}),${staffID})`;
    sql3 = `INSERT INTO bug_update(bug_id,content,update_time) VALUES (UUID_TO_BIN(${UUID}),"${content}", ${time})`;

    connection.query(sql1);
    connection.query(sql2);
    connection.query(sql3);

  })
}