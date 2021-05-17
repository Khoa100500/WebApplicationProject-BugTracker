const connection = require('./database')
const { v4: uuidv4 } = require('uuid')


const getUpdatesByBugID = (id) => {
  const sql =
    `SELECT update_time as time, content, authorID
    FROM bug_update WHERE bug_id = UUID_TO_BIN(?)`
  return connection.query(sql, [id])
}

const includeBugUpdates = (bugs, response) => {
  updates = bugs.map(bug => getUpdatesByBugID(bug.id))
  Promise.all(updates).then(result => {
    response.json(bugs.map((bug, index) => ({
      ...bug,
      updates: result[index][0]
    })))
  })
}

exports.getBugs = (response) => {
  const sql =
    `SELECT 
    BIN_TO_UUID(b.bug_id) AS id, 
    title, 
    bug_description AS description, 
    BIN_TO_UUID(userID) AS userID,
    BIN_TO_UUID(staffID) AS staffID
    FROM bug_report AS b, work_on AS w
    WHERE b.bug_id = w.bug_id AND b.bug_status=0`
  connection.query(sql).then(result => {
    includeBugUpdates(result[0], response)
  })
}

exports.getBugsByStaffID = (id, response) => {
  const sql =
    `SELECT 
    BIN_TO_UUID(b.bug_id) AS id, 
    title, 
    bug_description AS description, 
    BIN_TO_UUID(userID) AS userID,
    BIN_TO_UUID(staffID) AS staffID
    FROM bug_report AS b, work_on AS w 
    WHERE b.bug_id = w.bug_id
    AND w.staffID = UUID_TO_BIN(?)
    AND b.bug_status=0`
  connection.query(sql, [id]).then(result => {
    includeBugUpdates(result[0], response)
  })
}

exports.getBugsByUserID = (id, response) => {
  const sql =
    `SELECT 
    BIN_TO_UUID(b.bug_id) AS id, 
    title, 
    bug_description AS description, 
    BIN_TO_UUID(userID) AS userID,
    BIN_TO_UUID(staffID) AS staffID
    FROM bug_report AS b, work_on AS w 
    WHERE b.bug_id = w.bug_id
    AND b.userID = UUID_TO_BIN(?)
    AND b.bug_status=0`
  connection.query(sql, [id]).then(result => {
    includeBugUpdates(result[0], response)
  })
}

exports.createBug = (requestBody, response) => {
  const UUID = uuidv4()
  const { title, description, userID, staffID, updates } = requestBody
  const { time, content, authorID } = updates[0]
  sql1 = 'INSERT INTO bug_report(bug_id, title, bug_description, bug_status, userID) VALUES (UUID_TO_BIN(?), ?, ?, 0, UUID_TO_BIN(?))'
  sql2 = 'INSERT INTO work_on(bug_id, staffID) VALUES(UUID_TO_BIN(?), UUID_TO_BIN(?))'
  sql3 = 'INSERT INTO bug_update(bug_id, content, update_time, authorID) VALUES (UUID_TO_BIN(?), ?, ?, UUID_TO_BIN(?))'
  connection.query(sql1, [UUID, title, description, userID]).then(() => {
    connection.query(sql2, [UUID, staffID]).then(() => {
      connection.query(sql3, [UUID, content, time, authorID]).then(() => {
        response.end()
      })
    })
  })
}

exports.updateBugByID = (id, requestBody, response) => {
  const { updates } = requestBody
  delete_sql = 'DELETE FROM bug_update WHERE bug_id = UUID_TO_BIN(?)'
  insert_sql = 'INSERT INTO bug_update(bug_id, content, update_time, authorID) VALUES (UUID_TO_BIN(?), ?, ?, UUID_TO_BIN(?))'
  connection.query(delete_sql, [id]).then(() => {
    promises = updates.map(({ content, time, authorID }) =>
      connection.query(insert_sql, [id, content, time, authorID]))
    Promise.all(promises).then(() => {
      response.end()
    })
  })
}

exports.deleteBugByID = (id, response) => {
  connection.query('UPDATE bug_report SET bug_status = 1 WHERE bug_id = UUID_TO_BIN(?)', [id]).then(() => {
    response.end()
  })
}