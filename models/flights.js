const { Schema } = require('mongoose')

const Airport = new Schema(
  {
    airline: { type: String, required: true },
    flight_number: { type: String, required: true },
    price: { type: Float, required: true },
    numberOfSeats: { type: Number, required: true },
    
    arrivalAirport: { ref: "Airport" },
    
  },
  { timestamps: true }
)

module.exports = Airport