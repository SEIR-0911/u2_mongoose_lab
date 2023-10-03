const db = require('../db')
// const Chance = require('chance')
const { Airport, Flight } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const createFlight = async () => {
    const airports = await Airport.find()
    const flights = [
        {
            airline: `United`,
            flightNumber: 1234,
            price: 400,
            numberOfSeats: 100,
            departingAirport:airports[0]._id,
            arrivalAirport:airports[1]._id,
            departingDateTime: new Date("2023-10-03T00:00:00Z"),
            arrivalDateTime: new Date("2023-10-03T05:30:00Z")
        },
        {
            airline: `Spirit`,
            flightNumber: 234,
            price: 30,
            numberOfSeats: 150,
            departingAirport:airports[2]._id,
            arrivalAirport:airports[3]._id,
            departingDateTime: new Date("2023-11-03T00:00:00Z"),
            arrivalDateTime: new Date("2023-12-04T05:30:00Z")
        },
        {
            airline: `Lufthansa`,
            flightNumber: 543,
            price: 1000,
            numberOfSeats: 400,
            departingAirport:airports[1]._id,
            arrivalAirport:airports[0]._id,
            departingDateTime: new Date("2023-10-05T00:00:00Z"),
            arrivalDateTime: new Date("2023-10-06T05:30:00Z")
        },
    ]
    await Flight.insertMany(flights)
    console.log(`created flights`)
    console.log(flights)
}
const run = async () => {
    await createFlight()
    db.close()
}
run()