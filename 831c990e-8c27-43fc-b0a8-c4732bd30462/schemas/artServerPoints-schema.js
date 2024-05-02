const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const artServerPointsSchema = mongoose.Schema({
    userId: reqString,
    totalScore: {
    type: Number,
    default: 0,
  }
}) // points schema

module.exports = mongoose.model('artServerPoints', artServerPointsSchema)