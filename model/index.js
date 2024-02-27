const mongoose = require('mongoose')

const airportSchema = require('./airport')

const flightSchema = require('./flight')

const airport = mongoose.model('airport', airportSchema)

const flight = mongoose.model('flight', flightSchema)

module.exports = {
  airport,
  flight
}
