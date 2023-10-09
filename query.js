const db = require('./db')
const { Airport, Flight } = require('./models')

// List all flights and airports
const allFlights = async () => {
    const flights = await Flight.find()
    console.log('All Flights:', flights)
}
const allAirports = async () => {
    const airports = await Airport.find()
    console.log('All Airports:', airports)
}
const allFlightsAirports = async () => {
    const flights = await Flight.find()
    const airports = await Airport.find()
    console.log(`All Flights: ${flights} \n All Airports: ${airports}`)
}

// Show route based on Object's Id
const routesByFlightsId = async (flightId) => {
    const thisFlight = await Flight.findById(`${flightId}`)
    const departingAirport = await Airport.findById(`${thisFlight.departingAirport}`)
    const arrivalAirport = await Airport.findById(`${thisFlight.arrivalAirport}`)
    console.log(`This flights route: ${departingAirport.code} to ${arrivalAirport.code}`)
}
const routesByFlightNumber = async (flightNum) => {
    const thisFlight = await Flight.findOne({ flightNumber: flightNum })
    const departingAirport = await Airport.findById(`${thisFlight.departingAirport}`)
    const arrivalAirport = await Airport.findById(`${thisFlight.arrivalAirport}`)
    console.log(`This flight will leave ${departingAirport.name} and travel to ${arrivalAirport.name}`)
}

// Create Flights
const createFlight = async (airline, flightNum, price, numSeats, departCode, arrivCode, departDateTime, arrivDateTime) => {
    const depart = await Airport.findOne({ code: departCode})
    const arriv = await Airport.findOne({ code: arrivCode})
    const newFlight = await Flight.create({
        airline: `${airline}`,
        flightNumber: flightNum,
        price: price,
        numberOfSeats: numSeats,
        departingAirport: depart._id,
        arrivalAirport: arriv._id,
        departureDateTime: departDateTime,
        arrivalDateTime: arrivDateTime
    })
    console.log(`This flight was created: ${newFlight}`)

}


// Update Flights and Airports
const updateFlights = async (flightid, whatToUpdate, update) => {
    let updateFlight = ""
    if (whatToUpdate === "airline") {
        updateFlight = await Flight.findByIdAndUpdate(flightid, { airline: update})
    } else if (whatToUpdate === "flightNumber") {
        updateFlight = await Flight.findByIdAndUpdate(flightid, { flightNumber: update})
    } else if (whatToUpdate === "price") {
        updateFlight = await Flight.findByIdAndUpdate(flightid, { price: update})
    }
    else if (whatToUpdate === "numberOfSeats") {
        updateFlight = await Flight.findByIdAndUpdate(flightid, { numberOfSeats: update})
    }
    else if (whatToUpdate === "departingAirport") {
        updateFlight = await Flight.findByIdAndUpdate(flightid, { departingAirport: update})
    }
    else if (whatToUpdate === "arrivalAirport") {
        updateFlight = await Flight.findByIdAndUpdate(flightid, { arrivalAirport: update})
    }
    else if (whatToUpdate === "departureDateTime") {
        updateFlight = await Flight.findByIdAndUpdate(flightid, { DepartureDateTime: update})
    } else if (whatToUpdate === "arrivalDateTime") {
        updateFlight = await Flight.findByIdAndUpdate(flightid, { arrivalDateTime: update})
    }
    console.log(`On: ${updateFlight} \n Changes: ${whatToUpdate} ${update}`)
}
const updateAirports = async (id, whatToUpdate, update) => {
    let updateAirport = ""
    if (whatToUpdate === "name") {
        updateAirport = await Airport.findByIdAndUpdate(id, { name: update})
    } else if (whatToUpdate === "location") {
        updateAirport = await Airport.findByIdAndUpdate(id, { location: update})
    } else if (whatToUpdate === "code") {
        updateAirport = await Airport.findByIdAndUpdate(id, { code: update })
    }
    console.log(`On: ${updateAirport} \n Changes: ${whatToUpdate} ${update}`)
}

// Delete any Flight and Airport
const deleteFlight = async (id) => {
    const deleteThisFlight = await Flight.findByIdAndDelete(id)
    console.log(`This Flight was Deleted: ${deleteThisFlight}`)

}
const deleteAirport = async (id) => {
    const deleteThisAirport = await Airport.findByIdAndDelete(id)
    console.log(`This Airport was Deleted: ${deleteThisAirport}`)

}


const run = async () => {
    try {
        await allFlights()
        await allAirports()
        await allFlightsAirports()
        await routesByFlightsId('6477afd0e29d2948403e6162')
        await routesByFlightNumber(1018)
        await createFlight(`American Airlines`, 1020, 387.89, 189, `LAX`, `LGA`, `2023-06-01T08:30:00.000Z`, `2023-06-01T13:45:00.000Z`)
        await updateFlights("6477ffebaebf76fdf3590ad2", 'numberOfSeats', 146)
        await updateAirports(`6477afd0e29d2948403e614c`, 'location', "Los Angeles, Cali")
        await deleteFlight("647806f1d4c96682ebbc21ad")
        await deleteAirport("6477afd0e29d2948403e614c")
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

run()