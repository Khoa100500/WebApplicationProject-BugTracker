const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log('---------------------------------------')
  console.log(req.method, req.url, req.body)
  next()
})

// Load routes
apiRouter = express.Router()
apiRouter.use('/login', require('./routes/login'))
apiRouter.use('/bugs', require('./routes/bug'))
apiRouter.use('/people', require('./routes/people'))

app.use('/api', apiRouter)
// Add a comment

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})