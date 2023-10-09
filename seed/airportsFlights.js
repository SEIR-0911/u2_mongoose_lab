const db = require('../db')
const { Airport, Flight } = require('../models')

// const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createAirports = async () => {
    const airports = [
      {
        name: 'Toronto Pearson International Airport',
        location: 'Toronto',
        code: 'YYZ'
      },
      {
        name: 'Calgary International Airport',
        location: 'Calgary',
        code: 'YYC'
      },
      {
        name: 'Edmonton International Airport',
        location: 'Edmonton',
        code: 'YEG'
      },
      {
        name: 'Montréal–Trudeau International Airport',
        location: 'Montreal',
        code: 'YUL'
      }
    ]
   
   //running our Mongo commands through JS! How cool is that!
   //it is cool
    await Airport.insertMany(airports)
    // using console.log to see the data we've seen
    console.log('Created Airports!')
  }
  
  const createFlights = async () => {
    const pearson = await Airport.find({ name: 'Toronto Pearson International Airport' })
    const calgary = await Airport.find({ name: 'Calgary International Airport' })
    const edmonton = await Airport.find({ name: 'Edmonton International Airport' })
    const montreal = await Airport.find({ name: 'Montréal–Trudeau International Airport' })
  
    const flights = [
      {
        airline: "Air Canada",
        flightNumber: 1001,
        price: 1001.01,
        numberOfSeats: 101,
        departingAirport: pearson[0]._id,
        arrivalAirport: calgary[0]._id,
        departureDateTime: new Date('2023-10-11T20:08:28.352Z')
      },
     {
        airline: "Air Korea",
        flightNumber: 1002,
        price: 1002.02,
        numberOfSeats: 102,
        departingAirport: edmonton[0]._id,
        arrivalAirport: montreal[0]._id,
        departureDateTime: new Date('2023-10-12T21:08:28.352Z')
      },
      {
        airline: "United",
        flightNumber: 1003,
        price: 1003.03,
        numberOfSeats: 103,
        departingAirport: pearson[0]._id,
        arrivalAirport: edmonton[0]._id,
        departureDateTime: new Date('2023-10-13T22:08:28.352Z')
      },
      {
        airline: "WestJet",
        flightNumber: 1004,
        price: 1004.04,
        numberOfSeats: 104,
        departingAirport: pearson[0]._id,
        arrivalAirport: montreal[0]._id,
        departureDateTime: new Date('2023-10-14T23:08:28.352Z')
      },
      {
        airline: "Porter",
        flightNumber: 1005,
        price: 1005.05,
        numberOfSeats: 105,
        departingAirport: montreal[0]._id,
        arrivalAirport: edmonton[0]._id,
        departureDateTime: new Date('2023-10-15T01:08:28.352Z')
      },
      {
        airline: "Delta",
        flightNumber: 1006,
        price: 1006.06,
        numberOfSeats: 106,
        departingAirport: montreal[0]._id,
        arrivalAirport: calgary[0]._id,
        departureDateTime: new Date('2023-10-16T02:08:28.352Z')
      },
      {
        airline: "Air Canada",
        flightNumber: 1007,
        price: 1007.07,
        numberOfSeats: 107,
        departingAirport: calgary[0]._id,
        arrivalAirport: edmonton[0]._id,
        departureDateTime: new Date('2023-10-17T03:08:28.352Z')
      }
    ]
  
    await Flight.insertMany(flights)
    console.log('Created flights with airports!')
  }

const run = async () => {
    await createAirports()
    await createFlights()
    // await Airport.deleteMany({})
    // await Flight.deleteMany({})
    db.close()
    
    
    // const tasks = await createTasks()
    // await createUsersWithTasks(tasks)
    // db.close()
}

run()