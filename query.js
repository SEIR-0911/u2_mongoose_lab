const db = require('./db')
const { Airport, Flight } = require('./models')

const allFlights = async () => {
    const flights = await Flight.find()
    console.log(`Here are all of the flights - ${flights}`)
}

const allAirports = async () => {
    const airports = await Airport.find()
    console.log(`Here are all of the flights - ${airports}`)
}

const flightsAirports = async () => {
    const airports = await Airport.find()
    const flights = await Flight.find()
    console.log(`All flights: ${flights} All airports: ${airports}`)
}

const routesByFlightsId = async (flightId) => {
    const thisFlight = await Flight.findById(`${flightId}`)
    const departingAirport = await Airport.findById(`${thisFlight.departingAirport}`)
    const arrivalAirport = await Airport.findById(`${thisFlight.arrivalAirport}`)
    console.log(`${departingAirport.code} - ${arrivalAirport.code}`)
}

const routesByFlightNumber = async (num) => {
    const thisFlight = await Flight.findOne({ flight_number: num })
    const departingAirport = await Airport.findById(`${thisFlight.departingAirport}`)
    const arrivalAirport = await Airport.findById(`${thisFlight.arrivalAirport}`)
    console.log(` ${departingAirport.name} to ${arrivalAirport.name}`)
}

const createFlight = async (airline, num, price, seats, departCode, arrivCode, departDateTime) => {
    const depart = await Airport.findOne({ code: departCode})
    const arriv = await Airport.findOne({ code: arrivCode})
    const newFlight = await Flight.create({
        airline: `${airline}`,
        flight_number: num,
        price: price,
        numberOfSeats: seats,
        departingAirport: depart._id,
        arrivalAirport: arriv._id,
        departure_Date_Time: departDateTime
    })
    console.log(`This flight was created: ${newFlight}`)
}

const run = async () => {
    try {
    //    await allFlights() 
    //    await allAirports()
    //    await flightsAirports()
    // await routesByFlightsId("651f7a2c316033aa486af2a4")
    // await routesByFlightNumber(4)
    await createFlight(`American Airlines`, 8, 387, 150, `LAX`, `LGA`, Date("2023-11-12 10:10:20"))



    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

run()