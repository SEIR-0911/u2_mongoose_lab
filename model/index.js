const mongoose = require('mongoose')
//This line imports the Mongoose library, which is a popular Object Data Modeling (ODM) library for MongoDB. It allows you to interact with MongoDB in a more structured and convenient way by defining schemas and models for your data.
const airportSchema = require('./airport')
//This line imports a schema definition for the "airport" collection. The require('./airport') statement loads the schema definition from a separate file named "airport.js." A schema in Mongoose defines the structure and validation rules for documents in a MongoDB collection.
const flightSchema = require('./flight')
//Similar to the previous line, this line imports a schema definition, but in this case, it's for the "flight" collection. It loads the schema definition from a file named "flight.js."

//we can give them any name we want, but like so much else in JS, it would be counterintuitive to not give it a semantic, 
//recognizable name
const airport = mongoose.model('airport', airportSchema)
//Here, a Mongoose model for the "airport" collection is created. The mongoose.model method is used to define a model. It takes two arguments:
//'airport': The first argument specifies the name of the MongoDB collection where documents with this schema will be stored. In this case, it's "airport."
//airportSchema: The second argument is the schema that defines the structure and validation rules for documents in the "airport" collection.
const flight = mongoose.model('flight', flightSchema)
//This line creates a Mongoose model for the "flight" collection, similar to the previous line. 
module.exports = {
  airport,
  flight
}
// This line exports the Mongoose models you've created, allowing you to use them in other parts of your Node.js application.