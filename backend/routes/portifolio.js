const router = require('express').Router()

router.get('/', (req, res) => {
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

module.exports = router
