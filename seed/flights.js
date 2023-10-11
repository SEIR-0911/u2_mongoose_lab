const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const ohareAirport = await Airport.find({ name: 'Ohare International Airport' })
  const dallasFortWorth = await Airport.find({ name: 'Dallas Fort Worth' })
  const denverInternational = await Airport.find({ name: 'Denver International' })
  const losAngelesInternational = await Airport.find({ name: 'Los Angeles International' })

  const flights = [
    {
      airLine: 'American',
      flight_number: '2080',
      price: '$200',
      numberOfSeats: "80",
      departureDateTime: "2023-10-01",
      airport_id: ohareAirport[0]._id
    },
   {
      airline: 'American',
      flight_number: '2090',
      numberOfSeats: '70',
      departureDateTime: "023-10-02",
      airport_id: dallasFortWorth[0]._id
    },
    {
      airLine: 'United',
      flight_number: '2095',
      numberOfSeats: '90',
      departureDateTime: "023-10-02",
      airport_id: denverInternational[0]._id
    },
    {
      airLine: 'Delta',
      flight_number: '2096',
      numberOfSeats: '90',
      departureDateTime: "2023-10-03",
      airport_id: losAngelesInternational[0]._id
    },

    {
      airLine: 'Air France',
        flight_number: '2090',
        numberOfSeats: '1988',
        departureDateTime: "2023-10-04",
        airport_id: dallasFortWorth[0]._id
      },

      {
        airLine: 'Emerates',
        flight_number: '3090',
        numberOfSeats: '90',
        departureDateTime: "2023-10-05",
        airport_id: ohareAirport[0]._id
      },

      {
        airLine: 'Lufthansa',
        flight_number: '5060',
        numberOfSeats: '100',
        departureDateTime: "2023-10-06",
        airport_id: dallasFortWorth[0]._id
      }
  ]

  await Flight.insertMany(flights)
  console.log('Created airports with flights!')
}
const run = async () => {
  await main()
  db.close()
}

run()