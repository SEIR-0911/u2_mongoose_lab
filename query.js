const db = require('./db')
const { Airport, Flight } = require('./models')

//show all airports
const allAirports = async () => {
    const airports = await Airport.find()
    console.log('All Airports:', airports)
}


//show all flights
const allFlights = async () => {
    const flights = await Flight.find()
    console.log('All flights:', flights)
}


//show flight by id 
const flightById = async (flightId) => {
    try {
        const flight = await Flight.findById(flightId)
        if (flight) {
            console.log('Flight details by ID:', flight)
        } else {
            console.log('Flight not found.')
        }
    } catch (error) {
        console.error('Error fetching flight by ID:', error)
    }
}

//^^ getting error of mongonotconnected but mongo is connected so im guessing it is something with my server




//create flight


//update flight


//delete any flight


//delete any airport


















//run
const run = async () => {
    try {
        // AllAirports()
        allFlights()
        // flightById('65343aa73cf5a79b1fce181d')
        




    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

run()