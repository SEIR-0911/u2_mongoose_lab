// import DB connection
const db = require("./db")

// import Airport and Flight models from model
const { Airport, Flight } = require("./models")

// errors
// const run = async () => {
//     try {

//     } catch (error) {
//         console.log(error)
//     } finally {
//         // await db.close()
//     }
// }

// run()

// // STORY 1. As A User (AAU), I want to view a list of all flights and airports (index functionality) that displays each flight's airline, airport, flight no., and departure date/time (consider formatting the departs property).

// const viewAirports = async() => {
//     const airports = await Airport.find()
//     console.log(airports)
// }

// const viewFlights = async() => {
//     const flights = await Flight.find()
//     console.log(flights)
// }

// viewAirports()
// viewFlights()

// QUESTION: I have to remove the finally await db.close() to avoid the error. When I remove it, the terminal goes wonky.

// // STORY 2. AAU, I want to be able to access the details for each of these objects via a Show route based on the object's ID

// const viewAirports = async() => {
//     const airports = await Airport.find()
//     console.log(airports)
// }

// const viewFlights = async() => {
//     const flights = await Flight.find().populate("departingAirport").populate("arrivalAirport")
//     console.log(flights)
// }

// viewAirports()
// viewFlights()

// // 3. AAU, I want to create flights by entering the information for Airports and Flights using a Query.js file that you will create

// const createFlight = async (airlineCompany, flightNumber, flightPrice, flightSeats, departingAirport, arrivalAirport, airlineTakeOff) => {
//     const airportDeparting = await Airport.findOne ({name: departingAirport})
//     const airportArriving = await Airport.findOne ({name: arrivalAirport})
//     const flight = await Flight.create({
//         airline: airlineCompany,
//         flight_number: flightNumber,
//         price: flightPrice,
//         numberOfSeats: flightSeats,
//         departingAirport: airportDeparting._id,
//         arrivalAirport: airportArriving._id,
//         departureDateTime: airlineTakeOff
//     })
//     console.log(flight)
// }

// createFlight("Jetblue", "1525", 500, 60, "JFK", "MCO", "October 1 @ 12:00 pm")

// // 4. AAU, I want to be able to update the details for my Flights and Airports

// const updateFlight = async (newAirlineCompany, newFlightNumber, newFlightPrice, newFlightSeats, newAirportDeparting, newAirportArriving, newAirlineTakeOff) => {
//     const updatedFlight = await Flight.updateOne({
//         {airline: newAirlineCompany},
//         {flight_number: newFlightNumber},
//         {price: newFlightPrice},
//         {numberOfSeats: newFlightSeats},
//         {departingAirport: newAirportDeparting._id},
//         {arrivalAirport: newAirportArriving._id},
//         {departureDateTime: newAirlineTakeOff}
//     })
//     console.log(updatedFlight)
// }

// updateFlight("Jetblue", "1525", 500, 60, "JFK", "MCO", "October 1 @ 12:00 pm")

// // 5. AAU, I want to be able to delete any Flight and Airport

// const deleteAirport = async(airport) => {
//     const deletedAirport = await Airport.deleteOne({name: airport})
// }
// const deleteFlight = async() => {
//     const deletedFlight = await flight.deleteOne({flight_number: flightNum})
// }


// async function main () {
//     try{
//         await viewAirports()
//         await viewFlights()
//         await createFlight()
//         await updateFlight()
//         await deleteAirport()
//         await deleteFlight()
//     } catch (error) {
//         console.log(error)
//     } finally {
//         await db.close()
//     }
// }

// main()