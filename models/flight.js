const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
  },
  flightNumber: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  numberOfSeats: {
    type: Number,
    required: true,
  },
  departingAirport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'airport',
    required: true,
  },
  arrivalAirport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'airport',
    required: true,
  },
  departureDateTime: {
    type: Date,
    required: true,
  },
});

const Flight = mongoose.model('flight', flightSchema);

module.exports = flight;
