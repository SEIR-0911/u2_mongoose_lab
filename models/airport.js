const {Schema} = require('mongoose')

const Airport = new Schema (
    {
        name: {type: String, required: true},
        location: {type: String, required: true}, 
        code: { type: String, required: true },
        
        //because the parent contains the Child it does not need _id
        //when the Child contained the Parent it did need the _id
        flights: [{ type: Schema.Types.ObjectId, ref: 'Flight' }]
    },
    {timestamps: true}
)

module.exports = Airport