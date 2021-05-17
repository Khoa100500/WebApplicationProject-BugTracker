const jwt = require("jsonwebtoken")
const config = require("../config")
const connection = require("./database")


const verifyToken = (req, res, next) => {
  if (req.url === '/login') {
    return next()
  }

  let token = req.headers['x-access-token']
  if (!token) {
    return res.status(403).send({
      message: 'No token provided!'
    })
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(403).send({
        message: 'No token provided!'
      })
    }
    req.auth = decoded
    next()
  });
};


const login = (req, res) => {
  const { username, password } = req.body

  connection.query('SELECT *, BIN_TO_UUID(id) as id FROM people WHERE user_name=?', [username]).then(rows => {
    person = rows[0][0]

    if (!person) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      })
    }

    if (password === person.pass_word) {
      const role = ['admin', 'staff', 'user'][person.role_id - 1]
      const auth = {
        id: person.id,
        name: person.p_name,
        username,
        role
      }
      const token = jwt.sign(auth, config.secret, {
        expiresIn: config.tokenExpires
      })
      res.status(200).send({
        ...auth,
        accessToken: token
      })
    } else {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      })
    }
  })
}


module.exports = { verifyToken, login }