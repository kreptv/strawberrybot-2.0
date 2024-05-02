const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const userSchema = mongoose.Schema({
  userId: reqString,
  lastDaily: {
    type: Number,
    default: 0,
    required: true,
  },
  lastDGD: {
    type: String,
    required: true,
  },
  lastSwancore: {
    type: String,
    required: true,
  },
  lastSwancoreBand: {
    type: String,
    required: true,
  },
  totalScore: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model('user', userSchema)
