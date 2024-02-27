const db = require("../db");
const { airport, flight } = require("../model");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const Dallas = await airport.find({ name: "Dallas" });
  const DFW = await airport.find({ name: "DFW" });
  const Hartsfield = await airport.find({ name: "Hartsfield" });
  const Maynard = await airport.find({ name: "Maynard" });

  const flights = [
    {
      airline: "Delta",
      flightNumber: 200,
      price: 534,
      numberOfSeats: 1,
      departingAirport: Dallas[0]._id,
      arrivalAirport: Hartsfield[0]._id,
      DepartureDateTime: Date(),
    },
    {
      airline: "Delta",
      flightNumber: 201,
      price: 983,
      numberOfSeats: 1,
      departingAirport: Dallas[0]._id,
      arrivalAirport: Hartsfield[0]._id,
      DepartureDateTime: Date(),
    },
    {
      airline: "Delta",
      flightNumber: 203,
      price: 243,
      numberOfSeats: 1,
      departingAirport: DFW[0]._id,
      arrivalAirport: Maynard[0]._id,
      DepartureDateTime: Date(),
    },
    {
      airline: "Frontier",
      flightNumber: 204,
      price: 90,
      numberOfSeats: 1,
      departingAirport: Maynard[0]._id,
      arrivalAirport: DFW[0]._id,
      DepartureDateTime: Date(),
    },
    {
      airline: "United",
      flightNumber: 205,
      price: 50,
      numberOfSeats: 1,
      departingAirport: Dallas[0]._id,
      arrivalAirport: DFW[0]._id,
      DepartureDateTime: Date(),
    },
    {
      airline: "Frontier",
      flightNumber: 206,
      price: 45,
      numberOfSeats: 1,
      departingAirport: Maynard[0]._id,
      arrivalAirport: DFW[0]._id,
      DepartureDateTime: Date(),
    },
    {
      airline: "United",
      flightNumber: 207,
      price: 765,
      numberOfSeats: 1,
      departingAirport: Hartsfield[0]._id,
      arrivalAirport: Maynard[0]._id,
      DepartureDateTime: Date(),
    },
  ];

  await flight.insertMany(flights);
  console.log("Created flights with airports!");
};

const run = async () => {
  await main();
  db.close();
};

run();