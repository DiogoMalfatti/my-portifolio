const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.json({
    success: true,
  })
})

app.get('/portifolio', (req, res) => {
  const data = [
    {
      id: 1,
      name: 'My first project',
      createdAt: '2020-01-01',
    },
    {
      id: 2,
      name: 'My second project',
      createdAt: '2020-01-02',
    },
    {
      id: 3,
      name: 'My other project',
      createdAt: '2020-01-03',
    },
  ]
  res.json({
    success: true,
    data: data,
  })
})

app.listen(PORT)
