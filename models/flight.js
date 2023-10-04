//Child
const { Schema } = require('mongoose')

const Flight = new Schema(
  {
    airline: { type: String, required: true },
    flight_number: { type: Number, required: true },
    price: { type: Number, required: true },
    numberOfSeats: { type: Number, required: true },
    //Airport references come from the name of the schema in the model docs
    departingAirport: { type: Schema.Types.ObjectId, ref: 'Airport'},
    arrivalAirport: { type: Schema.Types.ObjectId, ref: 'Airport'},
    departure_date_time: { type: Date, required: true },
  },
  { timestamps: true }
)

module.exports = Flight