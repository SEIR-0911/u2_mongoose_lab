const { Schema } = require('mongoose')

const Flight = new Schema(
  {
    airline: { type: String, required: true },
    flight_number: { type: Number, required: true },
    price: {type: Number, required:true},
    numberOfSeats: {type: Number, required: true},
    departngAirport: {ref: 'airport_id'},
    arrivalAirport: {ref: 'airport_id'},
    departure_Data_Time: {type: Date}
  },
  { timestamps: true }
)

module.exports = Flight