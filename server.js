require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const api = require('./backend/routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({
    success: true,
  })
})

app.use('/api', api)

const PORT = process.env.PORT
app.listen(PORT)
