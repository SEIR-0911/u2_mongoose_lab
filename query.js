// Write your queries here
const db = require("./db");
const { flight, airport } = require("./model");

//general structure:
// async function main() {
//   try {
//   } catch (error) {
//     console.log(error)
//   } finally {
//     await db.close()
//   }
// }

// /
async function main() {
  try {
    const findFlight = async () => {
      const flights = await flight.findOne();
      console.log(flights);
    };
    const createAirport = async () => {
      const airports = await airport.findOne();
      console.log(airports);
    };
    await findFlight();
    await createAirport();
  } catch (error) {
    console.error(error);
  } finally {
    await db.close();
  }
}

main();

// List all flights and airports
const allFlights = async () => {
  const flights = await flight.find();
  console.log("All Flights:", flights);
};

const allAirports = async () => {
  const airports = await airport.find();
  console.log("all airports:", airports);
};

//in one code block:
const allFlightsAirports = async () => {
  const flights = await flight.find();
  const airports = await airport.find();
  console.log(`All Flights: ${flights} \n All Airports: ${airports}`);
};

allFlightsAirports();

//AAU, I want to be able to access the details for each of these objects via a Show route based on the object's ID

const routesByAirportCode = async (flightID) => {
  const flight = await flight.findById(`${flightID}`); //where is flightID pulling in from? -->it's not. it's a parametr that will ahve to specifically be called witha value put into teh parameter field.
  const departingAirport = await airport.findById(
    `${thisFlight.departingAirport}`
  );
  const arrivalAirport = await airport.findById(`${thisFlight.arrivalAirport}`);
  console.log(
    `This flights route: ${departingAirport.code} to ${arrivalAirport.code}`
  );
};

const routesByAirportName = async (flightNum) => {
  const thisFlight = await flight.findOne({ flightNumber: flightNum });
  const departingAirport = await Airport.findById(
    `${thisFlight.departingAirport}`
  );
  const arrivalAirport = await Airport.findById(`${thisFlight.arrivalAirport}`);
  console.log(
    `This flight will leave ${departingAirport.name} and travel to ${arrivalAirport.name}`
  );
};
// AAU, I want to create flights by entering the information for Airports and Flights using a
//Query.js file that you will create
// Create Flights
const createFlight = async (
  airline,
  flightNum,
  price,
  numSeats,
  departCode,
  arrivCode,
  departDateTime,
  arrivDateTime
) => {
  const depart = await airport.findOne({ code: departCode });
  const arriv = await airport.findOne({ code: arrivCode });
  const newFlight = await flight.create({
    airline: `${airline}`,
    flightNumber: flightNum,
    price: price,
    numberOfSeats: numSeats,
    departingAirport: depart._id,
    arrivalAirport: arriv._id,
    departureDateTime: departDateTime,
    arrivalDateTime: arrivDateTime,
  });
  console.log(`This flight was created: ${newFlight}`);
};

//AAU, I want to be able to update the details for my Flights and Airports
const updateFlights = async (flightid, whatToUpdate, update) => {
  let updateFlight = ""; //?
  if (whatToUpdate === "airline") {
    updateFlight = await flight.findByIdAndUpdate(flightid, {
      airline: update,
    });
  } else if (whatToUpdate === "flightNumber") {
    updateFlight = await flight.findByIdAndUpdate(flightid, {
      flightNumber: update,
    });
  } else if (whatToUpdate === "price") {
    updateFlight = await flight.findByIdAndUpdate(flightid, { price: update });
  } else if (whatToUpdate === "numberOfSeats") {
    updateFlight = await flight.findByIdAndUpdate(flightid, {
      numberOfSeats: update,
    });
  } else if (whatToUpdate === "departingAirport") {
    updateFlight = await flight.findByIdAndUpdate(flightid, {
      departingAirport: update,
    });
  } else if (whatToUpdate === "arrivalAirport") {
    updateFlight = await flight.findByIdAndUpdate(flightid, {
      arrivalAirport: update,
    });
  } else if (whatToUpdate === "departureDateTime") {
    updateFlight = await flight.findByIdAndUpdate(flightid, {
      DepartureDateTime: update,
    });
  } else if (whatToUpdate === "arrivalDateTime") {
    updateFlight = await flight.findByIdAndUpdate(flightid, {
      arrivalDateTime: update,
    });
  }
  console.log(`On: ${updateFlight} \n Changes: ${whatToUpdate} ${update}`);
}; // please explain logic of what this prints console

const updateAirports = async (code, whatToUpdate, update) => {
  let updateAirport = "";
  if (whatToUpdate === "name") {
    updateAirport = await airport.findByIdAndUpdate(code, { name: update });
  } else if (whatToUpdate === "location") {
    updateAirport = await airport.findByIdAndUpdate(code, { location: update });
  } else if (whatToUpdate === "code") {
    updateAirport = await airport.findByIdAndUpdate(code, { code: update });
  }
  console.log(`On: ${updateAirport} \n Changes: ${whatToUpdate} ${update}`);
};
updateAirports(7867, "name", "LAS");
//why isn't anything printing to console?

//AAU, I want to be able to delete any Flight and Airport
// Delete any Flight and Airport
const deleteFlight = async (id) => {
  const deleteThisFlight = await flight.findByIdAndDelete(id);
  console.log(`This Flight was Deleted: ${deleteThisFlight}`);
};
const deleteAirport = async (id) => {
  const deleteThisAirport = await airport.findByIdAndDelete(id);
  console.log(`This Airport was Deleted: ${deleteThisAirport}`);
};

//   let book = await Book.create({
//     title: "Brothers Karamazov",
//     author: "Fyodor Dostoyevsky",
//     published_date: "1879-08-02",
//     publisher_id: publisher._id,
//   });
//   console.log(book);
// };

// const updateBook = async () => {
//   const updated = await Book.updateOne(
//     { title: "Harry Potter" },
//     { published_date: "1880-08-02" }
//   );
//   console.log(updated);
// };

// const deleteBook = async () => {
//   let deleted = await Book.deleteOne({ title: "Brothers Karamazov" });
//   console.log(deleted);
// };

// async function main() {
//   try {
//     await findBook();
//     await createBook();
//     await updateBook();
//     await deleteBook();
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await db.close();
//   }
// }

//main();
