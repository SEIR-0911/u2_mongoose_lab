const db = require('../db')
// const Chance = require('chance')
const { Airport} = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const createAirport = async () => {
    const airports = [
        {
            name: `Chicago O'Hare`,
            location: `Chicago, IL`,
            code: `ORD`
          },
          {
            name: `Atlanta Hartfield-Jackson`,
            location: `Atlanta, GA`,
            code: `ATL`
          },
          {
            name: `United BSL`,
            location: `Basil, France`,
            code: `BSL`
          },
          {
            name: `New York JFK`,
            location: `New York, NY`,
            code: `JFK`
          },
    ]
    await Airport.insertMany(airports)
    console.log(`created airports`)
}



const run = async () => {
    await createAirport()
    db.close()
}
run()