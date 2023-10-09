const { model } = require('mongoose')
const AirportSchema = require('./airport')
const FlightSchema = require('./flight')

const Airport = model('Airport', AirportSchema)
const Flight = model('Flight', FlightSchema)

module.exports = {
  Airport,
  Flight
}