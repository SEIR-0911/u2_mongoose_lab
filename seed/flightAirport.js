const db = require('../db')
const Chance = require('chance')
const { Airport, Flight } = require('../models')
const chance = new Chance();
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

let airports;
const airportCodes = [
  'ATL', 'LAX', 'ORD', 'DFW', 'DEN', 'JFK', 'SFO', 'SEA',
  'LAS', 'MCO', 'EWR', 'CLT', 'PHX', 'IAH', 'MIA', 'BOS',
]

const createAirport = async () => {
  airports = [...Array(7)].map(() => {
    return new Airport({
      name: chance.name(),
      location: chance.address(),
      code: chance.pickone(airportCodes)
    })
  })

  airport = await Airport.insertMany(airports)
  console.log(airport)
}

const createFlight = async () => {
  const flights = [...Array(7)].map(() => {
    return new Flight({
      airline: chance.name(),
      flightNumber: chance.integer({ min: 1000, max: 9999 }),
      price: chance.integer({ min: 1000, max: 1500 }),
      numberOfSeats: chance.integer({ min: 50, max: 150 }),
      departingDateTime: chance.date(),
      arrivalDateTime: chance.date(),
      arrivalAirport: chance.pickone(airports)._id,
      departingAirport: chance.pickone(airports)._id
    })
  })

  let createdFlights = await Flight.insertMany(flights);
  console.log(createdFlights)
}

const run = async () => {
  await createAirport()
  await createFlight()
  db.close()
}

run()