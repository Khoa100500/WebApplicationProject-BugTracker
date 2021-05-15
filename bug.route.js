const connection = require('./database')
const { v4: uuidv4 } = require('uuid');


module.exports = (app) => {

  app.get('/bugs', (req, res) => {
    connection.query("SELECT BIN_TO_UUID(bug_id),title,bug_description,bug_status,BIN_TO_UUID(userID) FROM bugtracker.bug_report;", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  })

  app.get('/bugs?staffID=:id', (req, res) => {
    let id = req.params.id;
    let sql = `SELECT *,BIN_TO_UUID(bug_report.bug_id),BIN_TO_UUID(work_on.staffID) FROM bug_report INNER JOIN work_on ON  BIN_TO_UUID(work_on.staffID) = ${id}`
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  })

  app.get('/bugs?userID=:id', (req, res) => {
    let id = req.params.id;
    let sql = `USE bugtracker; SELECT *,BIN_TO_UUID(bug_id) , BIN_TO_UUID(userID) FROM bug_report b WHERE b.bug_status = 0 AND b.userID = UUID_TO_BIN(${id})`
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
    sql1 = `INSERT INTO bug_report(bug_id,title,bug_description,bug_status,userID) VALUES (UUID_TO_BIN(${UUID}), "${title}", "${description}", 0, ${userID})`;
    sql2 = `INSERT INTO work_on(bug_id,staffID) VALUES(UUID_TO_BIN(${UUID}),${staffID})`;
    sql3 = `INSERT INTO bug_update(bug_id,content,update_time,authorID) VALUES (UUID_TO_BIN(${UUID}),"${content}", ${time}, ${authorID})`;
    connection.query(sql1);
    connection.query(sql2);
    connection.query(sql3);
  })

  app.delete('/bugs/:bugID', (req,res) => {
    let bugID = req.params.bugID;
    connection.query(`SET SQL_SAFE_UPDATES = 0; USE bugtracker; UPDATE bug_report SET bug_status = 1 WHERE BIN_TO_UUID(bug_id) = "${bugID}"`)
  })
}