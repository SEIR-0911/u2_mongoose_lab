const { Schema } = require('mongoose')

const Flight = new Schema(
  {
    airline: { type: String, required: true },
    flight_number: { type: String, required: true },
    price: { type: String, required: true },
    numberOfSeats: { type: Number, required: true },
    departureDateTime: {type: String},
    airport_id: { type: Schema.Types.ObjectId, ref: 'airport_id' },
    
    
   
    
  },
  { timestamps: true }
)

module.exports = Flight