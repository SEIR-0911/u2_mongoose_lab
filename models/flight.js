const { Schema } = require('mongoose')
const Flight = new Schema(
    {
        airline: { type: String, required: true },
        flightNumber: { type: Number, required: true },
        price: { type: Number, required: true },
        numberOfSeats: { type: Number, required: true },
        departingAirport: { type: Schema.Types.ObjectId, ref: 'Airport' },
        arrivalAirport: { type: Schema.Types.ObjectId, ref: 'Airport' },
        departingDateTime: { type: Date, required: true }, //
        arrivalDateTime: { type: Date, required: true } //
        //https://stackoverflow.com/questions/33791714/data-type-to-store-time-with-mongoose
    },
    { timestamps: true }
)
module.exports = Flight