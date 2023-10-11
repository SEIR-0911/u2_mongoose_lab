const { Schema } = require('mongoose')

const Airport = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    code: {type: String, required: true}
  },
  { timestamps: true }
)

module.exports = Airport