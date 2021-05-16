const connection = require('./database')
const { v4: uuidv4 } = require('uuid')

const getUpdatesByBugID = (id) => {
  const sql =
    `SELECT update_time as time, content, authorID
    FROM bug_update WHERE bug_id=UUID_TO_BIN("${id}")`
  connection.query(sql, (err, result) => {
    if (err) throw err
    return result
  })
}

const includeBugUpdates = (bugs) => bugs.map(bug => ({
  ...bug,
  updates: getUpdatesByBugID(bug.id)
}))

exports.getBugs = () => {
  const sql =
    `SELECT 
    BIN_TO_UUID(b.bug_id) AS id, 
    title, 
    bug_description AS description, 
    BIN_TO_UUID(userID) AS userID,
    BIN_TO_UUID(staffID) AS staffID
    FROM bug_report AS b, work_on AS w
    WHERE b.bug_id = w.bug_id`
  connection.query(sql, (err, result) => {
    if (err) throw err
    return includeBugUpdates(result)
  })
}

exports.getBugsByStaffID = (id) => {
  const sql =
    `SELECT 
    BIN_TO_UUID(b.bug_id) AS id, 
    title, 
    bug_description AS description, 
    BIN_TO_UUID(userID) AS userID,
    BIN_TO_UUID(staffID) AS staffID
    FROM bug_report AS b, work_on AS w 
    WHERE b.bug_id = w.bug_id
    AND w.staffID = UUID_TO_BIN("${id}")`
  connection.query(sql, (err, result) => {
    if (err) throw err
    return includeBugUpdates(result)
  })
}

exports.getBugsByUserID = (id) => {
  const sql =
    `SELECT 
    BIN_TO_UUID(b.bug_id) AS id, 
    title, 
    bug_description AS description, 
    BIN_TO_UUID(userID) AS userID,
    BIN_TO_UUID(staffID) AS staffID
    FROM bug_report AS b, work_on AS w 
    WHERE b.bug_id = w.bug_id
    AND b.userID = UUID_TO_BIN("${id}")`
  connection.query(sql, (err, result) => {
    if (err) throw err
    return includeBugUpdates(result)
  })
}

exports.createBug = (requestBody) => {
  const UUID = uuidv4()
  const { title, description, userID, staffID, updates } = requestBody
  const { time, content, authorID } = updates[0]
  sql1 = `INSERT INTO bug_report(bug_id,title,bug_description,bug_status,userID) VALUES (UUID_TO_BIN(${UUID}), "${title}", "${description}", 0, ${userID})`
  sql2 = `INSERT INTO work_on(bug_id,staffID) VALUES(UUID_TO_BIN(${UUID}),${staffID})`
  sql3 = `INSERT INTO bug_update(bug_id,content,update_time,authorID) VALUES (UUID_TO_BIN(${UUID}),"${content}", ${time}, ${authorID})`
  connection.query(sql1)
  connection.query(sql2)
  connection.query(sql3)
}

exports.updateBugByID = (id, requestBody) => {

}

exports.deleteBugByID = (id) => {
  connection.query(`UPDATE bug_report SET bug_status = 1 WHERE bug_id = UUID_TO_BIN("${id}")`)
}