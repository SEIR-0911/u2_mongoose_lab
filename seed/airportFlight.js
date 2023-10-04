// Seed your db with at least 4 airports and at least 7 flights. Use your Mongo shell, or your query.js file to Read all of your data before working with the User Stories tasks in the following prompt.

// import the db connection
const db = require("../db")

// import the Airport and Flight models from model
const { Airport, Flight } = require("../models")

// errors
db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    // arrays for airport data
    const airportsData = [
        { name: "JFK Airport", location: "NYC", code: "JFK"},
        { name: "Orlando", location: "Orlando, FL", code: "MCO"},
        { name: "Boston Logan International", location: "Boston, MA", code:"BOS"},
        { name: "Dallas", location: "Dallas, TX", code: "DFW"}
    ]
    // insert the array of airport data (airportsData) into the DB, and store the results in the airports variable
    const airports = await Airport.insertMany(airportsData)
    console.log("Added Airports")

    // arrays for flight data
    const JFK = await Airport.find({name: "JFK Airport"})
    const MCO = await Airport.find({name: "Orlando"})
    const BOS = await Airport.find({name: "Boston Logan International"})
    const DFW = await Airport.find({name: "Dallas"})
    const flightsData = [
        { airline: "Jetblue", flight_number: 1234, price: 500.50, numberOfSeats: 30, departingAirport: MCO._id, arrivalAirport: DFW._id, departureDateTime: "October 1 @ 12:00 pm"},
        { airline: "Jetblue", flight_number: 2345, price: 600, numberOfSeats: 30, departingAirport: JFK._id, arrivalAirport: MCO._id, departureDateTime: "October 1 @ 12:00 pm"},
        { airline: "Delta", flight_number: 3456, price: 700.50, numberOfSeats: 30, departingAirport: BOS._id, arrivalAirport: JFK._id, departureDateTime: "October 1 @ 12:00 pm" },
        { airline: "Delta", flight_number: 4567, price: 800, numberOfSeats: 300, departingAirport: DFW._id, arrivalAirport: BOS._id, departureDateTime: "October 1 @ 12:00 pm"},
        { airline: "Delta", flight_number: 5678, price: 550.50, numberOfSeats: 30, departingAirport: MCO._id, arrivalAirport: DFW._id, departureDateTime: "October 1 @ 12:00 pm"},
        { airline: "Spirit", flight_number: 6789, price: 250.50, numberOfSeats: 45, departingAirport: JFK._id, arrivalAirport: DFW._id, departureDateTime: "October 1 @ 12:00 pm"},
        { airline: "Spirit", flight_number: 7890, price: 250.50, numberOfSeats: 50, departingAirport: BOS._id, arrivalAirport: MCO._id, departureDateTime: "October 1 @ 12:00 pm"}
    ]

    // insert the array of flight data (flightsData)
    await Flight.insertMany(flightsData)
    console.log("Added Flights")
}

const run = async () => {
    await main()
    db.close()
}

module.exports = AirportFlight
// call function
run()

