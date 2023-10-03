// Create a Model of Airport with the following properties:

// Property:Type
// name:String
// location:String
// code:String

const { Schema } = require("mongoose")

const Airport = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        code: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = Airport