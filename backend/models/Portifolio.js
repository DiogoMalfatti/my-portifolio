const mongoose = require('mongoose')
const slug = require('slug')

const { Schema } = mongoose
const portifolioSchema = new Schema({
  image: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    required: true,
  },
  linkGlobe: {
    type: String,
    unique: true,
  },
  linkGithub: {
    type: String,
    unique: true,
  },
  linkYoutube: {
    type: String,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: function () {
      return slug(this.title)
    },
  },
})

module.exports = mongoose.model('portifolio', portifolioSchema)
