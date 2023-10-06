const db = require('./db');
const { Airport, Flight } = require('./models');
const Chance = require('chance')

const chance = new Chance()

const findAllAirports = async () => {
   const airports = await Airport.find();
   console.log('All Airports: ', airports);
};

// As A User (AAU), I want to view a list of all flights and airports (index functionality) that displays each flight's airline, airport, flight no., and departure date/time (consider formatting the departs property).
const findAllFlights = async () => {
   const flights = await Flight.find()
   .populate('arrivalAirport')
   .populate('departingAirport')
   .exec()
   console.log('All flights:', flights);
};


// AAU, I want to be able to access the details for each of these objects via a Show route based on the object's ID
const showFlight = async (id) => {
   const flight = await Flight.findById(id)
   console.log('Flight', flight)
}




// AAU, I want to create flights by entering the information for Airports and Flights using a Query.js file that you will create
const createFlights = async () => {
   const airports = await Airport.find({})
   const flight = await Flight.create({
         airline: chance.name(),
         flightNumber: chance.integer({ min: 1000 , max: 9999 }),
         price: chance.integer({ min: 1000 , max: 1500 }),
         numberOfSeats: chance.integer({ min: 50 , max: 150 }),
         departingDateTime: chance.date(),
         arrivalDateTime: chance.date(),
         arrivalAirport: chance.pickone(airports)._id,
         departingAirport: chance.pickone(airports)._id

   })
  
   console.log('Created Flights', flight)
}

// AAU, I want to be able to update the details for my Flights and Airports
const updateFlight = async () => {
   const airport = await Airport.updateOne({})
   const flight = await Flight.updateOne({})
   console.log('update', flight, airport)
}


// AAU, I want to be able to delete any Flight and Airport
const deleteFlight = async () => {
   const airport = await Airport.deleteOne({})
   const flight = await Flight.deleteOne({})
   console.log('update', flight, airport)
}


const run = async () => {
   try {
      // await findAllAirports();
      // await findAllFlights();
      // await showFlight('651de33e348d5b61fbc0b9b3');
      // await createFlights();
      // await updateFlight()
      // await deleteFlight()
   } catch (error) {
       console.log(error);
   } finally {
       await db.close();
   }
};

run();