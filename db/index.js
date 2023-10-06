// purpose is to use mongoose to connect mngo so that mongo can be used in javascript

// This below block is the boilerplate to connect to mongoose
const mongoose = require("mongoose");

//Connecting to a database: mongoose.connect().then().catch()

//neater version:
//mongoose
//    .connect()
//    .then()
//    .catch()

//final version with all the info:
mongoose
  .connect("mongodb://127.0.0.1:27017/flightsDatabase")
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

mongoose.set("debug", true);
//^if debug isn't a keyword. how does this functiom correctly?

const db = mongoose.connection; //connecting to db

module.exports = db;

//end of boiler plate block
