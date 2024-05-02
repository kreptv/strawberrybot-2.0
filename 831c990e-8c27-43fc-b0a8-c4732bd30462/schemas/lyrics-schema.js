const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const lyricsSchema = mongoose.Schema({
  lyrics: reqString,
  songName: reqString,
  band: reqString,
  singer: reqString
}) // lyrics schema

module.exports = mongoose.model('lyrics', lyricsSchema)
