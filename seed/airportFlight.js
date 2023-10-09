const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const createAirports = async () => {
    const airports = [
        {
            name: `Hartsfield-Jackson Atlanta International Airport`,
            location: 'Atlanta, GA',
            code: 'ATL'
        },
        {
            name: `Los Angeles International Airport`,
            location: `Los Angeles, CA`,
            code: `LAX`
        },
        {
            name: `John F. Kennedy International Airport`,
            location: `New York City, NY`,
            code: `JFK`
        },
        {
            name: `San Diego International Airport`,
            location: `San Diego, CA`,
            code: `SAN`
        },
        {
            name: `LaGuardia Airport`,
            location: `New York City, NY`,
            code: `LGA`
        },
        {
            name: `Fort Lauderdale-Hollywood International Airport`,
            location: `Fort Lauderdale & Hollywood, FL`,
            code: `FLL`
        },
    ]
    await Airport.insertMany(airports)
    console.log('Airports created')
}

const createFlights = async (airports) => {
    const ATL = await Airport.find({ code: 'ATL'})
    const LAX = await Airport.find({ code: 'LAX'})
    const JFK = await Airport.find({ code: 'JFK'})
    const SAN = await Airport.find({ code: 'SAN'})
    const LGA = await Airport.find({ code: 'LGA'})
    const FLL = await Airport.find({ code: 'FLL'})

    const flights = [
        {
            airline: `Spirit Airlines`,
            flightNumber: 1002,
            price: 214.99,
            numberOfSeats: 126,
            departingAirport: ATL[0]._id,
            arrivalAirport: FLL[0]._id,
            departureDateTime: `2023-05-31T12:00:00.000Z`,
            arrivalDateTime: `2023-05-31T14:45:00.000Z`
        },
        {
            airline: `United`,
            flightNumber: 1008,
            price: 356.89,
            numberOfSeats: 162,
            departingAirport: JFK[0]._id,
            arrivalAirport: LAX[0]._id,
            departureDateTime: `2023-05-30T19:00:00.000Z`,
            arrivalDateTime: `2023-05-31T04:45:00.000Z`
        },
        {
            airline: `Delta Airlines`,
            flightNumber: 1020,
            price: 268.99,
            numberOfSeats: 149,
            departingAirport: SAN[0]._id,
            arrivalAirport: JFK[0]._id,
            departureDateTime: `2023-05-31T19:45:00.000Z`,
            arrivalDateTime: `2023-06-01T03:45:00.000Z`
        },
        {
            airline: `American Airlines`,
            flightNumber: 1062,
            price: 389.89,
            numberOfSeats: 189,
            departingAirport: LGA[0]._id,
            arrivalAirport: LAX[0]._id,
            departureDateTime: `2023-05-31T06:35:00.000Z`,
            arrivalDateTime: `2023-05-31T14:20:00.000Z`
        },
        {
            airline: `Frontier`,
            flightNumber: 1015,
            price: 235.89,
            numberOfSeats: 189,
            departingAirport: LAX[0]._id,
            arrivalAirport: JFK[0]._id,
            departureDateTime: `2023-05-31T13:35:00.000Z`,
            arrivalDateTime: `2023-05-31T18:45:00.000Z`
        },
        {
            airline: `Southwest Airlines`,
            flightNumber: 1063,
            price: 338.89,
            numberOfSeats: 126,
            departingAirport: SAN[0]._id,
            arrivalAirport: LGA[0]._id,
            departureDateTime: `2023-05-31T17:45:00.000Z`,
            arrivalDateTime: `2023-05-31T23:15:00.000Z`
        },
        {
            airline: `Envoy Air`,
            flightNumber: 1025,
            price: 450.69,
            numberOfSeats: 149,
            departingAirport: LGA[0]._id,
            arrivalAirport: FLL[0]._id,
            departureDateTime: `2032-05-31T22:20:00.000Z`,
            arrivalDateTime: `2002-06-01T02:50:00.000Z`
        },
        {
            airline: `JetBlue`,
            flightNumber: 1010,
            price: 243.69,
            numberOfSeats: 142,
            departingAirport: JFK[0]._id,
            arrivalAirport: SAN[0]._id,
            departureDateTime: `2023-05-31T10:25:00.000Z`,
            arrivalDateTime: `2023-05-31T16:45:00.000Z`
        },
        {
            airline: `Spirit Airlines`,
            flightNumber: 1007,
            price: 215.99,
            numberOfSeats: 126,
            departingAirport: ATL[0]._id,
            arrivalAirport: LAX[0]._id,
            departureDateTime: `2023-05-30T23:00:00.000Z`,
            arrivalDateTime: `2023-05-31T02:35:00.000Z`
        },
        {
            airline: `American Airlines`,
            flightNumber: 1018,
            price: 367.89,
            numberOfSeats: 189,
            departingAirport: SAN[0]._id,
            arrivalAirport: LGA[0]._id,
            departureDateTime: `2023-05-31T18:20:00.000Z`,
            arrivalDateTime: `2023-05-31T22:35:00.000Z`
        },
    ]
    await Flight.insertMany(flights)
    console.log('Created Flights')
}

const run = async () => {
    const airports = await createAirports()
    await createFlights(airports)
    db.close()
}

run()