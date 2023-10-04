//Pull in db module & deconstructed Publisher object.
const db = require('../db')
const {Airport} = require ('../models')

//connect db.  If we get an error, the error will have the console we are in.
db.on('error', console.error.bind(console, 'mongoDB connection error'))

//async functions b/c we are taking a detour out of JS and into Mongo; waiting won't throw things out of order.

const main = async () => {
    await Airport.deleteMany({})
    const airports = [
        {
        name: 'Dallas Fort Worth International Airport',
        location: 'Grapevine, TX',
        code: 'DFW'
        },
        {
        name: 'Austin Bergstrom International Airport',
        location: 'Austin, TX',
        code: 'AUS'
        },
        {
        name: 'Dallas Love Field',
        location: 'Dallas, TX',
        code: 'DAL'
        },
        {
        name: 'George Bush Intercontinental Airport',
        location: 'Houston, TX',
        code: 'IAH'
        },
    ]
    //connecting JS & Mongo functionality.  Using JS to populate the db.
    await Airport.insertMany(airports)

    //const airport = await Airport.find({ name: 'George Bush Intercontinental Airport'})
    //console.log(airport)
}

const run = async () => {
    console.log("Hello world")
    //runs main function and awaits for the data to populate
    await main()
    //closes db after its run to keep from breaking anything
    db.close()
}

//Call function
run()