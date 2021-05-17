const express = require('express')
const config = require('./config')
const { verifyToken, login } = require('./controllers/auth')

const app = express()

app.use(express.json())
app.use(express.static(config.PUBLIC_DIR))

// Load routes
apiRouter = express.Router()
apiRouter.use(verifyToken)
apiRouter.post('/login', login)
require('./routes/bugs.route')(apiRouter)
require('./routes/people.route')(apiRouter)


app.use('/api', apiRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})