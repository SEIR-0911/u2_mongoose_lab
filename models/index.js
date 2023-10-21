const { model } = require('mongoose')
const FlightSchema = require('./flight')
const AirportSchema = require('./airport')

const Airport = model('Airport', AirportSchema)
const Flight = model('Flight', FlightSchema)

module.exports = {
  Airport,
  Flight
}