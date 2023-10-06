//we are pulling in a thing called a Schema, using more of those Mongoose modules we installed
const { Schema } = require('mongoose')


//creating a new Object called a Publisher, that follows the rules that Mongoose defines through the schema
const Airport = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    code: { type: String, required: true }
  },
  { timestamps: true }
)

//exporting this thing called a Publisher and all of its information so other files can use it
module.exports = Airport