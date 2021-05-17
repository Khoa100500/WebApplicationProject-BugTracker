const connection = require('./database')
const { v4: uuidv4 } = require('uuid')


exports.getPeople = (response) => {
  const sql =
    `SELECT BIN_TO_UUID(id) as id, 
    p_name AS name, role_name AS role, user_name as username
    FROM people as p, people_role as r
    WHERE p.role_id = r.role_id`
  connection.query(sql).then((result) => {
    response.json(result[0])
  })
}

exports.createPerson = (requestBody, response) => {
  const { name, role, username, password } = requestBody
  const role_id = ['admin', 'staff', 'user'].indexOf(role) + 1
  const sql =
    `INSERT INTO people VALUES(UUID_TO_BIN(?), ?, ?, ?, ?)`
  connection.query(sql, [uuidv4(), name, role_id, password, username]).then(() => {
    response.end()
  })
}

exports.updatePersonByID = (id, requestBody, response) => {
  delete_sql = 'DELETE FROM people WHERE id = UUID_TO_BIN(?)'
  connection.query(delete_sql, [id]).then(() => {
    this.createPerson(requestBody, response)
  })
}

exports.deletePersonByID = (id, response) => {
  const sql =
    `DELETE FROM people WHERE id=UUID_TO_BIN(?)`
  connection.query(sql, [id]).then(() => {
    response.end()
  })
}