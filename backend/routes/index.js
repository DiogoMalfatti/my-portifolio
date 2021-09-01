const router = require('express').Router()
const portifolio = require('./portifolio')

router.get('/', (req, res) => {
  res.json({
    success: false,
    message: 'Please, do not call /api, it is for our server',
  })
})

router.use('/portifolio', portifolio)

module.exports = router
