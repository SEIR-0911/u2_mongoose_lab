const { Schema } = require("mongoose");

const flight = new Schema(
  {
    airline: { type: String, required: true },
    flightNumber: { type: Number, required: true },
    price: { type: Number, required: true },
    numberOfSeats: { type: Number, required: true },
    departingAirport: {
      type: Schema.Types.ObjectId,
      ref: "airport._id",
      required: true,
    },
    arrivalAirport: {
   type: Schema.Types.ObjectId,
   ref: "airport._id",
   required: true,
    },
   DepartureDateTime: { type: Date, required: true },
    },
   { timestamps: true }
);

module.exports = flight;