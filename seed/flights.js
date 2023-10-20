const db = require("../db");
const { airport, flight } = require("../model");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const DIA = await airport.find({ name: "DIA" });
  const LAX = await airport.find({ name: "LAX" });
  const Ithaca = await airport.find({ name: "Ithaca Airport" });
  const NYC = await airport.find({ name: "NYC Airport" });

  const flights = [
    {
      airline: "Delta",
      flightNumber: 381,
      price: 534,
      numberOfSeats: 1,
      departingAirport: DIA[0]._id,
      arrivalAirport: LAX[0]._id,
      DepartureDateTime: Date(),
      //what is the DIA[0] doing (why? and why is there _id at the end?)
      //answer: DIA [0] goes into the DIA array and then ._id goes into the ID section of the array
    },
    {
      airline: "Delta",
      flightNumber: 382,
      price: 565,
      numberOfSeats: 1,
      departingAirport: LAX[0]._id,
      arrivalAirport: LAX[0]._id,
      DepartureDateTime: Date(),
    },
    {
      airline: "Delta",
      flightNumber: 383,
      price: 679,
      numberOfSeats: 1,
      departingAirport: Ithaca[0]._id,
      arrivalAirport: LAX[0]._id,
      DepartureDateTime: Date(),
    },
    {
      airline: "Frontier",
      flightNumber: 384,
      price: 56,
      numberOfSeats: 1,
      departingAirport: NYC[0]._id,
      arrivalAirport: LAX[0]._id,
      DepartureDateTime: Date(),
    },
    {
      airline: "United",
      flightNumber: 385,
      price: 765,
      numberOfSeats: 1,
      departingAirport: DIA[0]._id,
      arrivalAirport: LAX[0]._id,
      DepartureDateTime: Date(),
    },
    {
      airline: "Frontier",
      flightNumber: 386,
      price: 78,
      numberOfSeats: 1,
      departingAirport: DIA[0]._id,
      arrivalAirport: LAX[0]._id,
      DepartureDateTime: Date(),
    },
    {
      airline: "United",
      flightNumber: 387,
      price: 897,
      numberOfSeats: 1,
      departingAirport: NYC[0]._id,
      arrivalAirport: LAX[0]._id,
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
