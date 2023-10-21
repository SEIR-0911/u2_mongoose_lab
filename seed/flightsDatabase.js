const db = require("../db");
const { Airport, Flight } = require('../models')
const Chance = require('chance');
const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const createAirports = async () => {

    const airports = [
        { name: 'JFK', location: 'New York', code: 'JFK' },
        { name: 'LAX', location: 'Los Angeles', code: 'LAX' },
        { name: 'BWI', location: 'Baltimore', code: 'BWI' },
        { name: 'IAD', location: 'Washington D.C.', code: 'IAD' }
      ]

      await Airport.insertMany(airports)
      console.log('Created Airports')
    }

      const createFlights = async (airports) => {
        const BWI = await Airport.find({ code: 'BWI'})
        const LAX = await Airport.find({ code: 'LAX'})
        const JFK = await Airport.find({ code: 'JFK'})
        const IAD = await Airport.find({ code: 'IAD'})

      const flights = [
        { 
            airline: chance.company(), 
            price: chance.integer({ min: 500, max: 2000 }),
            flightNumber: chance.integer({ min: 100}, { max: 999 }), 
            numberOfSeats: chance.integer({ min: 0}, {max: 400 }), 
            departingAirport: BWI[0]._id,
            arrivalAirport: LAX[0]._id,
            // departingAirport: chance.pickone(airports), 
            // arrivalAirport: chance.pickone(airports), 
            departureDate: chance.timestamp()},
        { 
            airline: chance.company(), 
            price: chance.integer({ min: 500, max: 2000 }),
            flightNumber: chance.integer({ min: 100}, { max: 999 }), 
            numberOfSeats: chance.integer({ min: 0}, {max: 400 }), 
            departingAirport: JFK[0]._id,
            arrivalAirport: BWI[0]._id,
            // departingAirport: chance.pickone(airports), 
            // arrivalAirport: chance.pickone(airports), 
            departureDate: chance.timestamp()},
        { 
            airline: chance.company(), 
            price: chance.integer({ min: 500, max: 2000 }),
            flightNumber: chance.integer({ min: 100}, { max: 999 }), 
            numberOfSeats: chance.integer({ min: 0}, {max: 400 }), 
            departingAirport: IAD[0]._id,
            arrivalAirport: LAX[0]._id,
            // departingAirport: chance.pickone(airports), 
            // arrivalAirport: chance.pickone(airports), 
            departureDate: chance.timestamp()},
        { 
            airline: chance.company(), 
            price: chance.integer({ min: 500, max: 2000 }),
            flightNumber: chance.integer({ min: 100}, { max: 999 }), 
            numberOfSeats: chance.integer({ min: 0}, {max: 400 }), 
            departingAirport: JFK[0]._id,
            arrivalAirport: IAD[0]._id,
            // departingAirport: chance.pickone(airports), 
            // arrivalAirport: chance.pickone(airports), 
            departureDate: chance.timestamp()},
        { 
            airline: chance.company(), 
            price: chance.integer({ min: 500, max: 2000 }),
            flightNumber: chance.integer({ min: 100}, { max: 999 }), 
            numberOfSeats: chance.integer({ min: 0}, {max: 400 }), 
            departingAirport: BWI[0]._id,
            arrivalAirport: IAD[0]._id,
            // departingAirport: chance.pickone(airports), 
            // arrivalAirport: chance.pickone(airports), 
            departureDate: chance.timestamp()},
        { 
            airline: chance.company(), 
            price: chance.integer({ min: 500, max: 2000 }),
            flightNumber: chance.integer({ min: 100}, { max: 999 }), 
            numberOfSeats: chance.integer({ min: 0}, {max: 400 }), 
            departingAirport: IAD[0]._id,
            arrivalAirport: JFK[0]._id,
            // departingAirport: chance.pickone(airports), 
            // arrivalAirport: chance.pickone(airports), 
            departureDate: chance.timestamp()},
        { 
            airline: chance.company(), 
            price: chance.integer({ min: 500, max: 2000 }),
            flightNumber: chance.integer({ min: 100}, { max: 999 }), 
            numberOfSeats: chance.integer({ min: 0}, {max: 400 }), 
            departingAirport: JFK[0]._id,
            arrivalAirport: LAX[0]._id,
            // departingAirport: chance.pickone(airports), 
            // arrivalAirport: chance.pickone(airports), 
            departureDate: chance.timestamp()},
      ];



    await Flight.insertMany(flights)
    console.log('Created Flights')
    return flights; 
}

const run = async () => {
    const airports = await createAirports();
    const flights = await createFlights(airports); // Pass the airports variable
    db.close();
}

run();