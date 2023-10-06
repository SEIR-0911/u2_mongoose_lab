const { model } = require('mongoose')
const AirportSchema = require('./airport')
const FlightSchema = require('./flight')

const Airport = model('Airports', AirportSchema)
const Flight = model('Flights', FlightSchema)

module.exports = {
  Airport,
  Flight
}