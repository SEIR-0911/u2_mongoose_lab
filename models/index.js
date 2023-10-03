// Link them all?

const mongoose = require("mongoose")
const AirportSchema = require("./Airport")
const FlightSchema = require("./Flight")

const Airport = mongoose.model("Airport", AirportSchema)
const Flight = mongoose.model("Flight", FlightSchema)

module.exports = {
    Airport, 
    Flight
}