// START CRUD
const router = require('express').Router()
const Portifolio = require('../models/Portifolio')

// START CREATE 'C'RUD
router.post('/', async (req, res) => {
  const portifolio = new Portifolio({
    title: req.body.title,
    description: req.body.description,
  })

  try {
    const savedPortifolio = await portifolio.save()
    res.json({
      success: true,
      data: savedPortifolio,
    })
  } catch (err) {
    res.json({
      success: false,
      message: err,
    })
  }
})
// END CREATE 'C'RUD

// START READ C'R'UD
//READ ALL
router.get('/', async (req, res) => {
  try {
    const portifolio = await Portifolio.find()
    res.json({
      success: true,
      data: portifolio,
    })
  } catch (err) {
    res.json({
      success: false,
      message: err,
    })
  }
})
//READ ONE
router.get('/:slug', async (req, res) => {
  try {
    const portifolio = await Portifolio.findOne({
      slug: req.params.slug,
    })
    res.json({
      success: true,
      data: portifolio,
    })
  } catch (err) {
    res.json({
      success: false,
      message: err,
    })
  }
})
// END READ C'R'UD

// START UPDATE CR'U'D
router.patch('/:slug', async (req, res) => {
  try {
    let updatedPortifolio = await Portifolio.updateOne(
      {
        slug: req.params.slug,
      },
      {
        title: req.body.title,
        description: req.body.description,
      },
    )
    res.json({
      success: true,
    })
  } catch (err) {
    res.json({
      success: false,
      message: err,
    })
  }
})
// END UPDATE CR'U'D

module.exports = router
// END CRUD
