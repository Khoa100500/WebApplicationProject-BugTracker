const connection = require('./database')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const config = require('../config')


exports.getPeople = async (req, res) => {
  const sql =
    `SELECT BIN_TO_UUID(id) as id, 
    p_name AS name, role_name AS role, user_name as username
    FROM people as p, people_role as r
    WHERE p.role_id = r.role_id`
  const result = await connection.query(sql)
  res.json(result[0])
}

exports.createPerson = async (req, res) => {
  const { name, role, username, password } = req.body
  const hashedPassword = await bcrypt.hash(password, config.saltRounds)
  const UUID = uuidv4()
  const role_id = ['admin', 'staff', 'user'].indexOf(role) + 1
  const sql = 'INSERT INTO people VALUES(UUID_TO_BIN(?), ?, ?, ?, ?)'
  await connection.query(sql, [UUID, name, role_id, hashedPassword, username])
  res.json({
    id: UUID
  })
}

exports.updatePersonByID = async (req, res) => {
  const id = req.params.id
  const { name, role, username, password } = req.body
  const role_id = ['admin', 'staff', 'user'].indexOf(role) + 1

  if (password && password.length > 0) {
    const hashedPassword = await bcrypt.hash(password, config.saltRounds)
    update_sql = 'UPDATE people SET p_name=?, role_id=?, pass_word=?, user_name=? WHERE id = UUID_TO_BIN(?)'
    await connection.query(update_sql, [name, role_id, hashedPassword, username, id])
  } else {
    update_sql = 'UPDATE people SET p_name=?, role_id=?, user_name=? WHERE id = UUID_TO_BIN(?)'
    await connection.query(update_sql, [name, role_id, username, id])
  }
  res.end()
}

exports.deletePersonByID = async (req, res) => {
  const id = req.params.id
  const sql = 'DELETE FROM people WHERE id=UUID_TO_BIN(?)'
  await connection.query(sql, [id])
  res.end()
}