const { request } = require("express")
const jwt = require("jsonwebtoken")
const config = require("../config")
const connection = require("./database")
const bcrypt = require("bcrypt")


exports.handleLogin = async (req, res) => {
  const { username, password } = req.body

  const rows = await connection.query('SELECT *, BIN_TO_UUID(id) as id FROM people WHERE user_name=?', [username])
  person = rows[0][0]
  if (!person) {
    return res.status(401).json({
      message: "Invalid username"
    })
  }

  const match = await bcrypt.compare(password, person.pass_word);
  if (match) {
    const role = ['admin', 'staff', 'user'][person.role_id - 1]
    const authUser = {
      id: person.id,
      name: person.p_name,
      username,
      role
    }
    const token = jwt.sign(authUser, config.secret, {
      expiresIn: config.tokenExpires
    })
    res.json({
      ...authUser,
      accessToken: token
    })
  } else {
    return res.status(401).json({
      message: "Wrong password"
    })
  }
}

exports.permit = (...permittedRoles) => {
  return (req, res, next) => {
    const token = req.headers['x-access-token']

    if (!token) {
      return res.status(401).json({
        message: 'No token provided'
      })
    }

    jwt.verify(token, config.secret, (err, decodedUser) => {
      if (err) {
        return res.status(401).json({
          message: 'Invalid token'
        })
      }

      req.locals = {
        user: decodedUser
      }

      if (permittedRoles.length === 0) {
        return next()
      }

      if (permittedRoles.includes(decodedUser.role)) {
        next()
      } else {
        res.status(403).json({
          message: 'Unauthorized'
        })
      }
    })
  }
}