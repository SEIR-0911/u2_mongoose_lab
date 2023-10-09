const db = require("../db");
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const createAirports = async () => {

    const airports = [
        { name: 'JFK', location: 'New York', code: 'JFK' },
        { name: 'LAX', location: 'Los Angeles', code: 'LAX' },
        { name: 'ATL', location: 'Atlanta', code: 'ATL' },
        { name: 'DFW', location: 'Dallas/Fort Worth', code: 'DFW' }
      ];

      await Airport.insertMany(airports)
      console.log('Created Airport!')
    }

      const createFlights = async (airports) => {
        const ATL = await Airport.find({ code: 'ATL'})
        const LAX = await Airport.find({ code: 'LAX'})
        const JFK = await Airport.find({ code: 'JFK'})
        const DFW = await Airport.find({ code: 'DFW'})

      const flights = [
        { 
          airline: 'Delta', 
          flightNumber: 123, price: 200.50, 
          numberOfSeats: 150, 
          departingAirport: JFK[0]._id, 
          arrivalAirport: LAX[0]._id, 
          departureDate:'2023-10-10T10:00:00Z'},
        { 
          airline: 'American Airlines', 
          flightNumber: 456, 
          price: 180.00, 
          numberOfSeats: 140,
          departingAirport: ATL[0]._id, 
          arrivalAirport: DFW[0]._id,  
          departureDate:'2023-10-11T12:00:00Z'},
        { 
          airline: 'Southwest', 
          flightNumber: 789, 
          price: 150.75, 
          numberOfSeats: 130,
          departingAirport: ATL[0]._id, 
          arrivalAirport: JFK[0]._id,  
          departureDate:'2023-10-12T14:00:00Z'},
        { 
          airline: 'United', 
          flightNumber: 101, 
          price: 210.00, 
          numberOfSeats: 160,
          departingAirport: LAX[0]._id, 
          arrivalAirport: DFW[0]._id,  
          departureDate:'2023-10-13T16:00:00Z'},
        { 
          airline: 'JetBlue', 
          flightNumber: 112, 
          price: 190.25, 
          numberOfSeats: 155,
          departingAirport: DFW[0]._id, 
          arrivalAirport: JFK[0]._id,  
          departureDate:'2023-10-14T18:00:00Z'},
        { 
          airline: 'Alaska Airlines', 
          flightNumber: 131, 
          price: 175.00, 
          numberOfSeats: 145,
          departingAirport: LAX[0]._id, 
          arrivalAirport: DFW[0]._id,  
          departureDate:'2023-10-15T20:00:00Z'},
        { 
          airline: 'Spirit', 
          flightNumber: 141, 
          price: 165.50, 
          numberOfSeats: 135,
          departingAirport: ATL[0]._id, 
          arrivalAirport: JFK[0]._id,  
          departureDate:'2023-10-16T22:00:00Z'}
      ];

   

    await Flight.insertMany(flights)
    console.log('Created Airport!')
}

const run = async () => {
    //runs our main function and awaits for the data to populate
    const airports = await createAirports()
    await createFlights(airports)
      //closes our db after its run so things don't break
      db.close()
    }

    run ()