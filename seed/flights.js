const db = require('../db')
const { Airport, Flight} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const pineapplePort = await Airport.findOne({ name: 'Pineappleport'})
    const bigRock = await Airport.findOne({ name: 'Big Rock' })
    const islandHead = await Airport.findOne({ name: 'Easter Island Head' })
    const treeDome = await Airport.findOne({ name: 'Tree Dome' })
 
    const flights = [
        {
            airline: 'Pat-Lines',
            flightNumber: '123',
            price: 200.72,
            numberOfSeats: 2,
            departingAirport: pineapplePort._id,
            arrivalAirport: bigRock._id,
            departureDate: new Date(2023-12-18)
        },
        {
            airline: 'Flying Squirrel Airlines',
            flightNumber: '502',
            price: 347.22,
            numberOfSeats: 50,
            departingAirport: treeDome._id,
            arrivalAirport: pineapplePort._id,
            departureDate: new Date(2023-10-30)
        },
        {
            airline: 'Sky Sponge',
            flightNumber: '493',
            price: 295.04,
            numberOfSeats: 98,
            departingAirport: pineapplePort._id,
            arrivalAirport: bigRock._id,
            departureDate: new Date(2023-6-2)
        },
        {
            airline: 'Squid Air',
            flightNumber: '093',
            price: 3405.20,
            numberOfSeats: 1,
            departingAirport: islandHead._id,
            arrivalAirport: treeDome._id,
            departureDate: new Date(2023-8-26)
        },
        {
            airline: 'Pat-Lines',
            flightNumber: '45',
            price: 453.60,
            numberOfSeats: 60,
            departingAirport: treeDome._id,
            arrivalAirport: pineapplePort._id,
            departureDate: new Date(2023-2-3)
        },
        {
            airline: 'Sky Sponge',
            flightNumber: '544',
            price: 31.34,
            numberOfSeats: 1532,
            departingAirport: treeDome._id,
            arrivalAirport: islandHead._id,
            departureDate: new Date(2024-2-24)
        },
        {
            airline: 'Squid Air',
            flightNumber: '234',
            price: 9854.97,
            numberOfSeats: 3,
            departingAirport: islandHead._id,
            arrivalAirport: pineapplePort._id,
            departureDate: new Date(2023-11-17)
        }
    ]
    await Flight.insertMany(flights)
    console.log ('flights booked')
}

const run = async () => {
    await main()
    db.close()
}

run()