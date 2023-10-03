// Create a Flight Model with the following properties, making sure its linked to the respective airports they'll be flying in and out of:

// If you are feeling comfortable so far, use both Departing and Arriving Airports in your model. If you are still wrapping your head around Relations, feel free to just use one!
// Property:	Type
// airline: String
// flight number: Integer
// price: float
// numberOfSeats: integer
// departingAirport: ref - airport_id
// arrivalAirport: ref - airport_id
// departure date/time: Your choice! How do you think we should add this in?
// Which of our models is the Parent, which is the Child? How are we connecting the two?

const { Schema } = require("mongoose")

const Flight = new Schema(
    {
        airline: { type: String, required: true },
        flight_number: { type: Number, required: true },
        price: { type: Number, required: true },
        numberOfSeats: { type: Number, required: true },
        departingAirport: { type: Schema.Types.ObjectId, ref: "Airport" },
        arrivalAirport: { type: Schema.Types.ObjectId, ref: "Airport" },
        departureDateTime: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = Flight