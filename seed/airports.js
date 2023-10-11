
//pulling in our db module, and the deconstructed object of Publisher, with all of its information
const db = require('../db')
const { Airport } = require('../models')


//attaching to the db, and giving us an error if anything goes wrong
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//because we are taking a quick detour out of JS and into Mongo, we need to make sure these are all async functions. That way, even if it only takes .01 of second, it still won't throw things out of order
const main = async () => {
  const airports = [
    {
      name: 'OHare International airport',
      location: '123 ohair St, Chicago, IL 60645',
      code: "ORD"
    },
    {
      name: 'Dallas Fort Worth',
      location: '244 Dallas St, Dallas, TX 10022',
      code: 'DFW'
    },

    {
        name: 'Denver Intenational Airport',
        location: '123 Denver st, Denver, CO 10022',
        code: 'DEN'
      },
      {
        name: 'Los Angeles International Airport',
        location: '123 Angeles St, Los Angeles, CA 10022',
        code: 'LAX'
      }
  ]
 
 //running our Mongo commands through JS! How cool is that!
 //it is cool
  await Airport.insertMany(airports)
  // using console.log to see the data we've seen
  console.log('Created airports!')
}

//we keep these functions seperate so they can each run independently (Atomically) and perform their necessary task. 
//this is a bit complicated, yes, but it will prevent A Lot of errors we'd see if we didn't do this
const run = async () => {
//runs our main function and awaits for the data to populate
  await main()
  //closes our db after its run so things don't break
  db.close()
}

run()