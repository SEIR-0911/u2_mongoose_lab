//Seed your db with at least 4 airports. Use your
//Mongo shell, or your query.js file to Read all of your data

//pulling in our db module, and the deconstructed object of Publisher, with all of its information
const db = require("../db");
const { airport } = require("../model"); // getting the schema

//attaching to the db, and giving us an error if anything goes wrong
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//because we are taking a quick detour out of JS and into Mongo, we need to
//make sure these are all async functions. That way, even if it only takes
//.01 of second, it still won't throw things out of order
const main = async () => {
  const airports = [
    {
      name: "DIA",
      location: "Denver, CO",
      code: "3465",
    },
    {
      name: "LAX",
      location: "Los Angeles, CA",
      code: "7867",
    },
    {
      name: "Ithaca Airport",
      location: "10 E 53rd St, New York, NY 10022",
      code: "2583",
    },
    {
      name: "NYC Airport",
      location: "10 E 53rd St, New York, NY 10022",
      code: "7394",
    },
  ];

  //running our Mongo commands through JS! How cool is that!
  //it is cool
  await airport.insertMany(airports);
  // using console.log to see the data we've seen
  console.log("Created airports!");
};

//we keep these functions seperate so they can each run independently (Atomically) and perform their necessary task.
//this is a bit complicated, yes, but it will prevent A Lot of errors we'd see if we didn't do this
const run = async () => {
  //runs our main function and awaits for the data to populate
  await main();
  //closes our db after its run so things don't break
  db.close();
};

run();
