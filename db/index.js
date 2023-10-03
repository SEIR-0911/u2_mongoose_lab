// Populate your db/index.js file that connects to a database, we can call it "flightsDatabase":

const mongoose = require("mongoose")

mongoose
.connect("mongodb://127.0.0.1:27017/flightsDatabase")
.then(() => console.log("Connected to MongoDB"))
.catch((e)=> console.error("Connection Error", e.message))

const db = mongoose.connection
module.exports = db
