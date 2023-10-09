const db = require('./db')
const { Airport, Flight } = require('./models')


//As A User (AAU), I want to view a list of all flights and airports (index functionality) ...
const findAllAirports = async () => {
  const airports = await Airport.find()
  console.log('All Airports:', airports)
}

const findAllFlights = async () => {
  const flights = await Flight.find()
  console.log('All Flights:', flights)
}

const findAllFlightsFilter = async () => {
    const flights = await Flight.find({}, {airline:1, flightNumber:1, departureDateTime:1, departingAirport:1})
    .populate('departingAirport', 'name')
    .exec()
    
    const formattedFlights = flights.map((flight) => ({
        ...flight._doc,
        departingAirport: flight._doc.departingAirport.name
      }));

    console.log('All Flights:', formattedFlights)
}

//AAU, I want to be able to access the details for each of these objects via a Show route based on the object's ID
const  findFlightsByID = async (id) => {
    const flight = await Flight.findById(id)    
    console.log(flight)
}

const  findAirportByID = async (id) => {
    const airport = await Airport.findById(id)    
    console.log(airport)
}

//AAU, I want to create flights by entering the information for Airports and Flights using a Query.js file that you will create  
const createFlight = async (airline, flightNum, price, seats, departCode, arriveCode, departTime) => {
    const departingAirport = await Airport.find({code: departCode})
    console.log(departingAirport)
    const arrivingAirport = await Airport.find({code: arriveCode})
    console.log(arrivingAirport)
    const newFlight = await Flight.create({
        airline: airline,
        flightNumber: flightNum,
        price: price,
        numberOfSeats: seats,
        departingAirport: departingAirport[0]._id,
        arrivalAirport: arrivingAirport[0]._id,
        departureDateTime: new Date(departTime)
    })
}

//AAU, I want to be able to update the details for my Flights and Airports

const updateFlight = async (flightId, updatedInfo) => {
    await Flight.findByIdAndUpdate(flightId, updatedInfo )
    // console.log(flight)
}

const updateAirport = async (airportId, updatedInfo) => {
    await Airport.findByIdAndUpdate(airportId, updatedInfo )
    // console.log(airport)

}

// AAU, I want to be able to delete any Flight and Airport
const deleteAirport = async (id) => {
    await Airport.findByIdAndDelete(id)
}

const deleteFlight = async (id) => {
    await Flight.findByIdAndDelete(id)
}

const run = async () => {
  try {
    //   await findAllAirports()
    await findAllFlights()
    // await findAllFlightsFilter()
    // await findFlightsByID("651c774d20b0bc6f3698efcc")
    // await findAirportByID("651c774d20b0bc6f3698efc0")
    // await createFlight("Southwest", 1008, 1008.08, 108, 'YYZ', 'YYC', '2023-10-13T22:08:28.352Z')
    // await updateFlight("65234bf50a8e3e2068f7b0d7", {flightNumber: 1012, price: 1009.09})
    // await updateAirport("651c774d20b0bc6f3698efbd", {code: 'YYO'})
    // await deleteAirport('651c774d20b0bc6f3698efbe')
    // await deleteFlight('65234b6a2287495e8cbcf72f')

  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

run()