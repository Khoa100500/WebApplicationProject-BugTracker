const connection = require('./database')
const { v4: uuidv4 } = require('uuid')

const formatTime = (dt) => {
  let current_date = dt.getDate()
  let current_month = dt.getMonth() + 1
  let current_year = dt.getFullYear()
  let current_hrs = dt.getHours()
  let current_mins = dt.getMinutes()
  let current_secs = dt.getSeconds()
  current_date = current_date < 10 ? '0' + current_date : current_date
  current_month = current_month < 10 ? '0' + current_month : current_month
  current_hrs = current_hrs < 10 ? '0' + current_hrs : current_hrs
  current_mins = current_mins < 10 ? '0' + current_mins : current_mins
  current_secs = current_secs < 10 ? '0' + current_secs : current_secs
  return current_year + '-' + current_month + '-' + current_date + ' ' + current_hrs + ':' + current_mins + ':' + current_secs
}

const getUpdatesByBugID = async (id) => {
  const sql =
    `SELECT update_time as time, content, BIN_TO_UUID(authorID) as authorID
    FROM bug_update WHERE bug_id = UUID_TO_BIN(?)`
  return await connection.query(sql, [id])
}

const fixSQLTime = (updates) => updates.map(update => ({
  ...update,
  time: formatTime(update.time)
}))

const includeBugUpdates = async (bugs, response) => {
  const fullBugs = bugs.map(bug => getUpdatesByBugID(bug.id))
  const fullBug = await Promise.all(fullBugs)
  response.json(bugs.map((bug, index) => {
    return {
      ...bug,
      updates: fixSQLTime(fullBug[index][0])
    }
  }))
}

exports.getBugs = async (req, res) => {
  const sql =
    `SELECT 
    BIN_TO_UUID(b.bug_id) AS id, 
    title, 
    bug_description AS description, 
    BIN_TO_UUID(userID) AS userID,
    BIN_TO_UUID(staffID) AS staffID
    FROM bug_report AS b, work_on AS w
    WHERE b.bug_id = w.bug_id AND b.bug_status=0`
  const result = await connection.query(sql)
  await includeBugUpdates(result[0], res)
}

exports.getBugsByStaffID = async (req, res) => {
  const { id } = req.locals.user
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
  const result = await connection.query(sql, [id])
  await includeBugUpdates(result[0], res)
}

exports.getBugsByUserID = async (req, res) => {
  const { id } = req.locals.user
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
  const result = connection.query(sql, [id])
  await includeBugUpdates(result[0], res)
}

exports.createBug = async (req, res) => {
  const UUID = uuidv4()
  const { title, description, userID, staffID, updates } = req.body
  const { time, content, authorID } = updates[0]
  sql1 = 'INSERT INTO bug_report(bug_id, title, bug_description, bug_status, userID) VALUES (UUID_TO_BIN(?), ?, ?, 0, UUID_TO_BIN(?))'
  sql2 = 'INSERT INTO work_on(bug_id, staffID) VALUES(UUID_TO_BIN(?), UUID_TO_BIN(?))'
  sql3 = 'INSERT INTO bug_update(bug_id, content, update_time, authorID) VALUES (UUID_TO_BIN(?), ?, ?, UUID_TO_BIN(?))'
  await connection.query(sql1, [UUID, title, description, userID])
  await connection.query(sql2, [UUID, staffID])
  await connection.query(sql3, [UUID, content, time, authorID])
  res.json({
    id: UUID
  })
}

exports.updateBugByID = async (req, res) => {
  const { updates } = req.body
  const bugID = req.params.bugID
  delete_sql = 'DELETE FROM bug_update WHERE bug_id = UUID_TO_BIN(?)'
  insert_sql = 'INSERT INTO bug_update(bug_id, content, update_time, authorID) VALUES (UUID_TO_BIN(?), ?, ?, UUID_TO_BIN(?))'
  await connection.query(delete_sql, [bugID])
  const promises = updates.map(({ content, time, authorID }) =>
    connection.query(insert_sql, [bugID, content, time, authorID]))
  await Promise.all(promises)
  res.end()
}

exports.forwardBugByID = async (req, res) => {
  const { staffID } = req.body
  const bugID = req.params.bugID
  update_sql = 'UPDATE work_on SET staffID=UUID_TO_BIN(?) WHERE bug_id = UUID_TO_BIN(?)'
  await connection.query(update_sql, [staffID, bugID])
  res.end()
}

exports.deleteBugByID = async (req, res) => {
  const id = req.params.bugID
  await connection.query('DELETE FROM work_on WHERE bug_id = UUID_TO_BIN(?)', [id])
  await connection.query('DELETE FROM bug_report WHERE bug_id = UUID_TO_BIN(?)', [id])
  res.end()
}