require('dotenv').config()
const express = require('express')
// const bodyParser = require('body-parser')
const api = require('./backend/routes')

const app = express()
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//   res.json({
//     success: true,
//   })
// })

app.use('/api', api)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))

  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT
app.listen(PORT)
