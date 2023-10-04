const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

const Airport = mongoose.model('airport', airportSchema);

module.exports = airport;
