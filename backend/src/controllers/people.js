const connection = require('./database')
const { v4: uuidv4 } = require('uuid')


exports.getPeople = (req, res) => {
  const sql =
    `SELECT BIN_TO_UUID(id) as id, 
    p_name AS name, role_name AS role, user_name as username
    FROM people as p, people_role as r
    WHERE p.role_id = r.role_id`
  connection.query(sql).then((result) => {
    res.json(result[0])
  })
}

exports.createPerson = (req, res) => {
  const { name, role, username, password } = req.body
  const role_id = ['admin', 'staff', 'user'].indexOf(role) + 1
  const sql =
    `INSERT INTO people VALUES(UUID_TO_BIN(?), ?, ?, ?, ?)`
  connection.query(sql, [uuidv4(), name, role_id, password, username]).then(() => {
    res.end()
  })
}

exports.updatePersonByID = (req, res) => {
  const id = req.params.id
  const { name, role, username, password } = req.body
  const role_id = ['admin', 'staff', 'user'].indexOf(role) + 1

  update_sql = 'UPDATE people SET p_name=?, role_id=?, pass_word=?, user_name=? WHERE id = UUID_TO_BIN(?)'
  connection.query(update_sql, [name, role_id, password, username, id]).then(() => {
    res.end()
  })
}

exports.deletePersonByID = (req, res) => {
  const id = req.params.id
  const sql =
    `DELETE FROM people WHERE id=UUID_TO_BIN(?)`
  connection.query(sql, [id]).then(() => {
    res.end()
  })
}