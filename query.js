const db = require('./db')
const { Airport, Flight } = require('./models')

const findAllAirports = async () => {
  const airports = await Airport.find()
  console.log('All airports:', airports)
}

const findAllFlights = async () => {
  const flights = await Flight.find()
  console.log('All flights:', flights)
}

const run = async () => {
  try {
    await findAllAirports()
    // await findAllFlights()
  } 
  catch (error) {
    console.log(error)
  } 
  finally {
    await db.close()
  }
}

run()