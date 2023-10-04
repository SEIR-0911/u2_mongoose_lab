const db = require('./db')
const { Flight, Airport } = require('./models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

    const findAllFlights = async () => {
        const flights = await Flight.find()
        console.log('All flights', flights)
      }
      const findAllAirports = async () => {
        const airports = await Airport.find()
        console.log('All airports:', airports)
      }




      const run = async () => {
        try {
            await findAllFlights()
            await findAllAirports()
        } catch (error) {
          console.log(error)
        } finally {
          await db.close()
        }

}
run()
