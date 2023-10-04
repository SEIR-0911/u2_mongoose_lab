const db = require('./db');
const { Airport, Flight } = require('./models');

const findAllAirports = async () => {
    const airports = await Airport.find();
    console.log('All Airports: ', airports);
};

const findAllFlights = async () => {
    const flights = await Flight.find();
    console.log('All flights:', flights);
};

/**
 * As A User (AAU), I want to view a list of all flights and airports (index functionality)
 *  that displays each flight's airline, airport, flight no.,
 *  and departure date/time (consider formatting the departs property).
 */

const findAAU = async () => {
    let aAUFlights = await Flight.find()
        .populate("departingAirport")
        .populate("arrivalAirport")
        .exec();
    console.log('========= A list of all flights and airports ===========\n', aAUFlights);
};

/** AAU, I want to be able to access the details for each of these objects
 *  via a Show route based on the object's ID
 */

const showFlight = async (flightId) => {
    let flight = await Flight.findById(flightId);
    console.log("My Flight: ", flight);
};

/** 
 * AAU, I want to create flights by entering the information for Airports and 
 * Flights using a Query.js file that you will create
*/
const flight = {
    airline: "United Airline",
    flightNumber: 123,
    price: 1200,
    numberOfSeats: 300,
    departingDateTime: "2045-12-26T12:45:41.915Z",
    arrivalDateTime: "2044-06-03T03:15:25.131Z",
    arrivalAirport: "651dd694a256e214360b2a60",
    departingAirport: "651dd694a256e214360b2a5f"
};
const createFlight = async (flight) => {
    let newFlight = await Flight.create(flight);
    console.log("created a new flight: ", newFlight);
};

/**
 *  AAU, I want to be able to update the details for my Flights and Airports
 */

const updateFlight = async (flightId) => {
    let updateFlight = await Flight.findOneAndUpdate({ _id: flightId },
        { "airline": "United Airline" },
        { "flightNumber": "123" },
        { "price": "1200" },
        { "numberOfSeats": "300" },
        { "departingDateTime": "2045-12-26T12:45:41.915Z" },
        { "arrivalDateTime": "2044-06-03T03:15:25.131Z" },
        { "arrivalAirport": "651dd694a256e214360b2a60" },
        { "departingAirport": "651dd694a256e214360b2a5f" }
    );
    console.log("update flight: ", updateFlight);

};
/**
 * AAU, I want to be able to delete any Flight and Airport
 */
const deleteFlight = async (flightId) => {
    let deleteFlight = await Flight.findOneAndDelete({ _id: flightId });
    console.log("Delete flight ==>>", deleteFlight);
};

const run = async () => {
    try {
        await findAAU();
        await showFlight("651dd694a256e214360b2a5f");
        await createFlight(flight);
        await updateFlight("651dd694a256e214360b2a5f");
        await deleteFlight("651dd694a256e214360b2a5f");
    } catch (error) {
        console.log(error);
    } finally {
        await db.close();
    }
};

run();