const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const imagesSchema = mongoose.Schema({
  imageLink: reqString,
  singer: reqString
}) // lyrics schema

module.exports = mongoose.model('images', imagesSchema)
