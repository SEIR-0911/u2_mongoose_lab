const { Schema } = require('mongoose')

const Flight = new Schema(
  {
    airline: { type: String, required: true },
    flight_number: { type: String, required: true },
    price: { type: String, required: true },
    numberOfSeats: { type: Number, required: true },
    departingAirport: [{ type: Schema.Types.ObjectId, ref: 'airports_id' }],
    arrivalAirport: [{ type: Schema.Types.ObjectId, ref: 'airports_id' }],
    departureDateTime: { type: Date, required: true }
  },
  { timestamps: true }
)

module.exports = Flight