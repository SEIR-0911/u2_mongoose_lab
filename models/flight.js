const {Schema} = require('mongoose')

const Flight = new Schema (
    {
        airline: {type: String, required: true},
        flightNumber: {type: String, required: true},
        price: {type: String, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: [{type: Schema.Types.ObjectId, ref: 'airport'}],
        arrivalAirport: [{type: Schema.Types.ObjectId, ref: 'airport'}],
        departureDateTime: {type: Date, required: true},
    },
    {timestamps: true}
)

module.exports = Flight