const express = require('express')
const cors = require('cors')


// Create server
const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))

// Load routes
require('./routes')(app)

// Start server
const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})