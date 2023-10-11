const db = require('./db');
const { Airport, Flight } = require('./models');
const Chance = require('chance')

const chance = new Chance()

const findAllAirports = async () => {
   const airports = await Airport.find();
   console.log('All Airports: ', airports);
};

const findAllFlights = async () => {
   const flights = await Flight.find()
   .populate('arrivalAirport')
   .populate('departingAirport')
   .exec()
   console.log('All flights:', flights);
};

const showFlight = async (id) => {
   const flight = await Flight.findById(id)
   console.log('Flight', flight)
}

const updateFlight = async () => {
   const airport = await Airport.updateOne({})
   const flight = await Flight.updateOne({})
   console.log('update', flight, airport)
}

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