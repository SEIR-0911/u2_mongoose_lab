const db = require('../db')
const Chance = require('chance')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

let airport;

const createAirport = async () => {
  const airports = [
    {
      name: `Chicago O'Hare`,
      location: `Chicago, IL`,
      code: `ORD`
    },
    {
      name: `Atlanta Hartfield-Jackson`,
      location: `Atlanta, GA`,
      code: `ATL`
    },
    {
      name: `United BSL`,
      location: `Basil, France`,
      code: `BSL`
    },
    {
      name: `New York JFK`,
      location: `New York, NY`,
      code: `JFK`
    },
  ]

  airport = await Airport.insertMany(airports)
  console.log(airport)
}

const createFlight = async () => {

  const flights = [
    {
      airline: `Air France`,
      flightNumber: 1234,
      price: 400,
      numberOfSeats: 500,
      departingDateTime: new Date("2023-10-03T00:00:00Z"),
      arrivalDateTime: new Date("2023-10-03T05:30:00Z")
    },
    {
      airline: `Sammy's Airline`,
      flightNumber: 234,
      price: 30,
      numberOfSeats: 150,
      departingDateTime: new Date("2023-11-03T00:00:00Z"),
      arrivalDateTime: new Date("2023-12-04T05:30:00Z")
    },
    {
      airline: `United`,
      flightNumber: 123,
      price: 1000,
      numberOfSeats: 400,
      departingDateTime: new Date("2023-10-05T00:00:00Z"),
      arrivalDateTime: new Date("2023-10-06T05:30:00Z")
    },
    {
      airline: `American`,
      flightNumber: 543,
      price: 1000,
      numberOfSeats: 400,
      departingDateTime: new Date("2023-10-05T00:00:00Z"),
      arrivalDateTime: new Date("2023-10-06T05:30:00Z")
    },
  ]
  const createFlights = flights.map((flight, id) => {
    flight.arrivalAirport = airport[id]._id
    flight.departingAirport = airport[id]._id
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