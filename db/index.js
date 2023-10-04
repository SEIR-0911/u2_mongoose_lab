//Connect Mongoose to MongoDB so we can control it with JS.
const mongoose = require('mongoose')

mongoose
    //note the db at the end of the below line changes; all the rest is boilerplate.
  .connect('mongodb://127.0.0.1:27017/flightsDatabase')
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  //e is an accepted variable for exception/event
  .catch((e) => {
    console.error('Connection error', e.message)
  })
// mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db