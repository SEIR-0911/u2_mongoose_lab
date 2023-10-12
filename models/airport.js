//Create a Model of Airport with the following properties:

const { Schema } = require('mongoose')

const Airport = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    code: { type: String, required: true },
     },
  { timestamps: true }
)

module.exports = Airport