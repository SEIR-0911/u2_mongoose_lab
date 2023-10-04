const { model } = require('mongoose')
const AirportSchema = require('./airport')
const FlightSchema = require('./flight')

const Flight = model('Flight', FlightSchema)
const Airport = model('Airport', AirportSchema)

module.exports = {
  Flight,
  Airport
}