const db = require('../db')
const Chance = require('chance')
const { Flight, Airport } = require('../models')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const createFlights = async () => {
    const flights = [...Array(7)].map((flight) => {
        return new Flight({
            airline: chance.company(),
            flightNumber: chance.integer({ min: 1000}, { max: 4000 }),
            price: chance.dollar({ min: 1000}, { max: 3000 }),
            numberOfSeats: chance.integer({ min: 0}, {max: 10 }),
            departingAirport: chance.name(),
            arrivalAirport: chance.name(),
            departureDateTime: chance.timestamp(),
        })
    })
    await Flight.insertMany(flights)
    console.log('Created Flights!')
    return flights
}


const createAirportsWithFlights = async (flights) => {
    console.log(flights)
    let lenOfItems = 4
    const airports = [...Array(lenOfItems)].map((airport) => {
        const selectedFlights = flights.splice(0, flights.length / lenOfItems)
        return {
            name: chance.name(),
            location: chance.city(), 
            code: chance.postcode(),
            flights: selectedFlights.map((flight) => flight._id ) 
        }
    })
    await Airport.insertMany(airports)
    console.log('Created Airports!')
}


const run = async () => {
    const flights = await createFlights()
    await createAirportsWithFlights(flights)
    db.close()
}


run()