const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const songSchema = mongoose.Schema({
  songName: reqString,
  lyrics: reqString,
  album: reqString,
  aliases: Array,
  jc: {
    type: Boolean,
    default: false
  },
  k: {
    type: Boolean,
    default: false
  },
  t: {
    type: Boolean,
    default: false
  },
  j: {
    type: Boolean,
    default: false
  },
  a: {
    type: Boolean,
    default: false
  },
  w: {
    type: Boolean,
    default: false
  },
  o: {
    type: Boolean,
    default: false
  },
}) // song schema

module.exports = mongoose.model('song', songSchema)
