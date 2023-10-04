const db = require('./db')
const { Flight, Airport } = require('./models')

//make functions that do what you want here

//View a list of all flights and airports (index functionality) that displays each flight's airline, airport, flight no., and departure date/time:

const viewData = async () => {
    const airports = await Airport.find({})
    const flights = await Flight.find({}, {airline: 1, departingAirport: 1, flightNumber: 1, departureDate: 1} )

    console.log (airports, flights)
    //https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/#std-label-index-type-compound Actual indexing is a thing but it's just not clicking right now
}

//  Access the details for each of these objects via a Show route based on the object's ID
//What do you mean by Show route? is that related to the mongosh commands show db/show collections?

const airportById = async (idNum) => {
    let detailedViewA =  await Airport.find({_id: `${idNum}`})

    console.log(detailedViewA)
}

const flightById = async (idNum) => {
    const detailedViewF = await Flight.find({ _id: `${idNum}` })

    console.log(detailedViewF)
}

// Create flights by entering the information for Airports and Flights using a Query.js file

const createFLight = async (a_line, flightNum, currency, seatNum, dAirportName, aAirportName, departDate) => {
    const  newFlight = (
        {
            airline: a_line,
            flightNumber: flightNum,
            price: currency,
            numberOfSeats: seatNum,
            departingAirport: await Airport.findOne({ name: dAirportName._id }),
            arrivalAirport:  await Airport.findOne({ name: aAirportName._id }),
            departureDate: new Date(departDate)
        }
    )
    await Flight.create(newFlight) // apparently this is not a function???
    console.log(newFlight)
}

// Update the details for my Flights and Airports



// Delete any Flight and Airport


//run function:

const run = async () => {
    try{
        //await viewData()
        //await flightById('651cafa32425b23c57690363')
        await createFLight('Pat-Lines', 124, 200, 4, 'Pineappleport', 'Big Rock', 2023-2-1)
    } catch (error){
        console.log(error)
    } finally {
        await db.close()
    }
}

run() 