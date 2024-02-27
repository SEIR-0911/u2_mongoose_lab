const db = require("../db");
const { airport } = require("../model");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const airports = [
    {
      name: "Dallas",
      location: "Dallas, TX",
      code: "2345",
    },
    {
      name: "DFW",
      location: "Dallas, TX",
      code: "4655",
    },
    {
      name: "Hartsfield",
      location: "Atlanta, GA",
      code: "2345",
    },
    {
      name: "Maynard",
      location: "Atlanta, GA",
      code: "7453",
    },
  ];

  await airport.insertMany(airports);

  console.log("Created airports!");
};

const run = async () => {

  await main();
 
  db.close();
};

run();