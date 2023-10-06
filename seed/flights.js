const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const denDal = await Airport.find({ name: 'Denver to Dallas' })
  const fayAus = await Airport.find({ name: 'Fayetville to Austin' })
  const houVic = await Airport.find({ name: 'Houston to Victoria' })
  const lafLag = await Airport.find({ name: 'lafayetee to LaGrange' })
  const elDal = await Airport.find({ name: 'El Salvador to Dallas' })
  const tegCor = await Airport.find({ name: 'Tegucigalpa to corpus christi' })
  const midHom = await Airport.find({ name: 'Middle earth to Home' })
 

  const flights = [
    {
      airline: 'Spirit',
      flight_number: 1111,
      price: 57.2,
      numberOfSeats: 60,
      departingAirport: denDal[0]._id
    },
   {
    airline: 'American',
    flight_number: 2222,
    price: 225,
    numberOfSeats: 60,
    departingAirport: fayAus[0]._id
    },
    {
        airline: 'Delta',
        flight_number: 3333,
        price: 150.2,
        numberOfSeats: 43,
        departingAirport: houVic[0]._id
    },
    {
        airline: 'International Air',
        flight_number: 4444,
        price: 100,
        numberOfSeats: 35,
        departingAirport: lafLag[0]._id
    },
    {
        airline: 'American',
        flight_number: 5555,
        price: 550.23,
        numberOfSeats: 100,
        departingAirport: elDal[0]._id
    },
    {
        airline: 'Mohican',
        flight_number: 6666,
        price: 623,
        numberOfSeats: 65,
        departingAirport: tegCor[0]._id
    },
    {
        airline: 'Asian Air',
        flight_number: 7777,
        price: 10000,
        numberOfSeats: 600,
        departingAirport: midHom[0]._id
    },

  ]

  await Flight.insertMany(flights)
  console.log('Created flights with airports!')
}
const run = async () => {
  await main()
  db.close()
}

run()