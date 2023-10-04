const db = require('../db')
const { Airport, Flights }  = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createAirport = async () => {
    const airports = [
        
        {
            name: 'Boston Logan Airport',
            location: 'Boston, MA',
            code: 'BOS'
        },
        {
            name: 'Los Angeles International Airport',
            location: 'Los Angeles, CA',
            code: 'LAX'
        },
        {
            name: 'London Gatwick Airport',
            location: 'Gatwick, UK',
            code: 'LGW'
        },
        {
            name: 'John F. Kennedy Internatitonal Airport',
            location: 'New York, NY',
            code: 'JFK'
        }
    ]
    await Airport.insertMany(airports)
    console.log('Created Airports!')
    return airports
}

const createFlightsWithAirports = async (airports) => {
    //console.log(airports)
    const flights = [
        {
            airline:'Jet Blue',
            flightNumber: 717,
            price: 319.00,
            numberOfSeats: 200,
            departingAirport: 'departing_airport_id',
            arrivingAirport: 'arrival_airport_id',
            departure_date_time: '<2023-10-14T08:30:00>'
        },
        {
            airline:'American Airlines',
            flightNumber: 824,
            price: 500.00,
            numberOfSeats: 250,
            departingAirport: 'departing_airport_id',
            arrivingAirport: 'arrival_airport_id',
            departure_date_time: '<2023-8-10T05:20:00>'
        },
        {
            airline:'Air Canada',
            flightNumber: 321,
            price: 194.00,
            numberOfSeats: 180,
            departingAirport: 'departing_airport_id',
            arrivingAirport: 'arrival_airport_id',
            departure_date_time: '<2024-01-25T04:00:00>'
        },
        {
            airline:'United Airlines',
            flightNumber: 882,
            price: 334.00,
            numberOfSeats: 340,
            departingAirport: 'departing_airport_id',
            arrivingAirport: 'arrival_airport_id',
            departure_date_time: '<2024-04-04T05:00:00>'
        },
        {
            airline:'Spirit',
            flightNumber: 774,
            price: 23.00,
            numberOfSeats: 280,
            departingAirport: 'departing_airport_id',
            arrivingAirport: 'arrival_airport_id',
            departure_date_time: '<2023-12-11T11:00:00>'
        },
        {
            airline:'American Airlines',
            flightNumber: 558,
            price: 170.00,
            numberOfSeats: 200,
            departingAirport: 'departing_airport_id',
            arrivingAirport: 'arrival_airport_id',
            departure_date_time: '1<2024-11-09T09:30:00>'
        },
        {
            airline:'Jet Blue',
            flightNumber: 954,
            price: 582.00,
            numberOfSeats: 380,
            departingAirport: 'departing_airport_id',
            arrivingAirport: 'arrival_airport_id',
            departure_date_time: '<2024-08-18T05:00:00>'
        }
    ]
    await Flight.insertMany(flights)
    console.log('Created Flights!')
}

const run = async () => {
    const airports = await createAirports()
    await createFlightsWithAirports(airports)
    db.close()
}

run()
