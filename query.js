const db = require('./db')
const { Airport, Flight } = require('./models')

const findAllAirports = async () => {
    const airports = await Airport.find()
    console.log('All Airports: ', airports)
}

const findAllFlights = async () => {
    const flights = await Flight.find()
    console.log('All flights:', flights)
}

const findMyFlight = async () => {
    const myflights = await Flight.find({ "departingAirport": "651c9c0095914fdb38ae4fef" })
    console.log('All flights:', myflights)
}

const run = async () => {
    try {
        await findMyFlight()
        //  await findAllFlights()

    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

run();