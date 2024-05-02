const mongoose = require('mongoose')
//const {mongoPath} = require('./config.json')

const mongoPath = 'mongodb+srv://Krepta:Krepta0308YC@cluster0.v9q60.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  return mongoose
}
