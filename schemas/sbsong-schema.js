const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const sbsongSchema = mongoose.Schema({
  songName: reqString,
  lyrics: reqString,
  album: reqString,
  aliases: Array,
}) // song schema

module.exports = mongoose.model('sbsong', sbsongSchema)
