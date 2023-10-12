// Write your queries here

const db = require('./db')
const { Airport, Flights } = require('./models')

const findflight = async () => {
  const flight = await Flight.findOne()
  console.log(flights)
}

const createFlight = async () => {
  const airport = await Airport.findOne()

  let flight = await Flight.create({
      airline: 'viva',
      flight_number: '5050',
      numberOfSeats: '100',
      departureDateTime: "2023-10-05",
      airport_id: airport._id
  })
  console.log(flight)
}

const updateFlight = async () => {
  const updated = await Flight.updateOne({
      airline: 'viva',
      flight_number: '6800',
      numberOfSeats: '200',
      departureDateTime: "2023-10-10",
      airport_id: airport._id
  }
  )
  console.log(updated)
}

const deleteFlight = async () => {
  let deleted = await Flight.deleteOne({ flight_number: '5050' })
  console.log(deleted)
}

async function main() {
  try {
      await findFlight()
      await createFlight()
      await updateFlight()
      await deleteFlight()
  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()
