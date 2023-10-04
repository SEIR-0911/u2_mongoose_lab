//Pull in db module & deconstructed Flight object.
const db = require('../db')
const {Airport, Flight} = require ('../models')

//connect db.  If we get an error, the error will have the console we are in.
db.on('error', console.error.bind(console, 'mongoDB connection error'))

//async functions b/c we are taking a detour out of JS and into Mongo; waiting won't throw things out of order.

const main = async () => {
  await Flight.deleteMany({})

    const dfwAirport = await Airport.find({ name: 'Dallas Fort Worth International Airport'})
    const ausAirport= await Airport.find({name: 'Austin Bergstrom International Airport'})
    const dalAirport = await Airport.find({name: 'Dallas Love Field'})
    const iahAirport = await Airport.find({name: 'George Bush Intercontinental Airport'})

    const flights = [
        {
          airline: 'American Airlines',
          flight_number: 1373,
          price: 500,
          numberOfSeats: 366,
          //airport reference comes from the name of the schema/model doc.  _id is a unique id generated by Mongoose when the schemas are seeded.
          departingAirport: dfwAirport[0]._id,
          arrivalAirport: iahAirport[0]._id,
          departure_date_time: new Date('2023-10-07T08:30:00'),
        },
        {
          airline: 'United Airlines',
          flight_number: 1764,
          price: 650,
          numberOfSeats: 330,
          departingAirport: ausAirport[0]._id,
          arrivalAirport: dalAirport[0]._id,
          departure_date_time:  new Date("2023-10-07T11:15:00"),
        },
        {
          airline: 'Delta Airlines',
          flight_number: 895,
          price: 375,
          numberOfSeats: 280,
          departingAirport: iahAirport[0]._id,
          arrivalAirport: dalAirport[0]._id,
          departure_date_time: new Date("2023-10-08T14:45:00"),
        },
        {
          airline: 'Delta Airlines',
          flight_number: 1939,
          price: 786,
          numberOfSeats: 365,
          departingAirport: ausAirport[0]._id,
          arrivalAirport: dfwAirport[0]._id,
          departure_date_time: new Date("2023-10-09T17:30:00"),
        },
        {
          airline: 'United Airlines',
          flight_number: 2389,
          price: 1245,
          numberOfSeats: 600,
          departingAirport: ausAirport[0]._id,
          arrivalAirport: dfwAirport[0]._id,
          departure_date_time: new Date("2023-10-10T18:20:00"),
        },
        {
          airline: 'American Airlines',
          flight_number: 1952,
          price: 935,
          numberOfSeats: 455,
          departingAirport: dalAirport[0]._id,
          arrivalAirport: ausAirport[0]._id,
          departure_date_time: new Date("2023-10-11T09:15:00"),
        },
        {
          airline: 'American Airlines',
          flight_number: 1793,
          price: 734,
          numberOfSeats: 345,
          departingAirport: iahAirport[0]._id,
          arrivalAirport: dalAirport[0]._id,
          departure_date_time: new Date("2023-10-12T12:45:00"),
        },
    ]
    //connecting JS & Mongo functionality.  Using JS to populate the db.
    await Flight.insertMany(flights)
    //const flight1793 = await Flight.find({flight_number: 1793})
    //console.log(flight1793)
}

const run = async () => {
    //runs main function and awaits for the data to populate
    await main()
    //closes db after its run to keep from breaking anything
    db.close()
}

//Call function
run()