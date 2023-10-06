const { Schema } = require('mongoose')

const Flight = new Schema(
  {
    airline: { type: String, required: true },
    flight_number: { type: Number, required: true },
    price: { type: Number, required: true },
    numerOfSeats: { type: Number, required: true },
    departingAirport: { type: Schema.Types.ObjectId, ref: 'Airport' },
    arrivalAirport: { type: Schema.Types.ObjectId, ref: 'Airport' },
    departure_Date_Time: {type: Date},

  },
  { timestamps: true }
)

module.exports = Flight