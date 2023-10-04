const { Schema } = require('mongoose')

const Airport = new Schema(
  {
    Name: { type: String, required: true },
    Location: { type: String, required: true },
    Code: { type: String, required: true },
     },
  { timestamps: true }
)

module.exports = Book