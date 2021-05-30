const express = require('express')
const { verifyToken } = require('./controllers/auth')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// Load routes
apiRouter = express.Router()
// apiRouter.use(verifyToken)
apiRouter.use('/login', require('./routes/login'))
apiRouter.use('/bugs', require('./routes/bug'))
apiRouter.use('/people', require('./routes/people'))


app.use('/api', apiRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})