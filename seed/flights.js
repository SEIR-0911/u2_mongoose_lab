const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const createFlights = async () =>{
    const jfk = await Airport.find({ code: 'JFK' })
    const lax = await Airport.find({ code: 'LAX' })
    const bna = await Airport.find({ code: 'BNA' })
    const lga = await Airport.find({ code: 'LGA' })
   
    const flights = [
        {
            airline: "Delta Airlines",
            flight_number:  1,
            price: 450,
            numerOfSeats:  200, 
            departingAirport: jfk[0]._id,
            arrivalAirport: bna[0]._id,
            departure_Date_Time: Date()
        },
        {
            airline: "American Airlines",
            flight_number:  2,
            price: 500,
            numerOfSeats:  200, 
            departingAirport:  jfk[0]._id,
            arrivalAirport: lax[0]._id,
            departure_Date_Time: Date()
        },
        {
            airline: "Southwest Airlines",
            flight_number:  3,
            price: 300,
            numerOfSeats: 150, 
            departingAirport:  bna[0]._id,
            arrivalAirport: lga[0]._id,
            departure_Date_Time: Date()
        },
        {
            airline: "JetBlue Airways",
            flight_number:  4,
            price: 320,
            numerOfSeats:  160, 
            departingAirport:  lga[0]._id,
            arrivalAirport: bna[0]._id,
            departure_Date_Time: Date()
        },
        {
            airline: "United Airlines",
            flight_number:  5,
            price: 380,
            numerOfSeats:  170, 
            departingAirport:  jfk[0]._id,
            arrivalAirport: bna[0]._id,
            departure_Date_Time: Date()
        },
        {
            airline: "American Airlines",
            flight_number:  6,
            price: 520,
            numerOfSeats: 170, 
            departingAirport:  bna[0]._id,
            arrivalAirport: lax[0]._id,
            departure_Date_Time: Date()
        },
        {
            airline: "JetBlue Airways",
            flight_number:  7,
            price: 150,
            numerOfSeats:  190, 
            departingAirport:  lga[0]._id,
            arrivalAirport: jfk[0]._id,
            departure_Date_Time: Date()
        },
    ]

    await Flight.insertMany(flights)
    console.log('Created Flights!')
}

const run = async () => {
    await createFlights()
    db.close()
}   

run()