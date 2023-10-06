const db = require('./db')
const { Flight, Airport } = require('./models')

// List all flights
const allFlights = async () => {
    const flights = await Flight.find()
    console.log('All Flights:', flights)
}
// List all Airports
const allAirports = async () => {
    const airports = await Airport.find()
    console.log('All Airports:', airports)
}

// const allFlightsAirports = async () => {
//     const flights = await Flight.find()
//     const airports = await Airport.find()
//     console.log(`All Flights: ${flights} \n All Airports: ${airports}`)
// }

const routesByFlightsId = async (flightId) => {
    const thisFlight = await Flight.findById(`${flightId}`)
    const departingAirport = await Airport.findById(`${thisFlight.departingAirport}`)
    console.log(`This flights route: ${departingAirport.code}`)
}

const routesByFlightNumber = async (flightNum) => {
    const thisFlight = await Flight.findOne({ flightNumber: flightNum })
    const departingAirport = await Airport.findById(`${thisFlight.departingAirport}`)
    const arrivalAirport = await Airport.findById(`${thisFlight.arrivalAirport}`)
    console.log(`This flight will leave ${departingAirport.name} and travel to ${arrivalAirport.name}`)
}

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



 


async function main() {
try {
    // routesByFlightsId()
    // allFlightsAirports()
    // await allFlights()
    // await allAirports()
} catch (error) {
    console.log(error)
} finally {
    await db.close()
}
}
  
 main()  