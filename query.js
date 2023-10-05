const db = require('./db')
const { Flight, Airport } = require('./models')

//make functions that do what you want here

//View a list of all flights and airports (index functionality) that displays each flight's airline, airport, flight no., and departure date/time:

const viewData = async () => {
    const airports = await Airport.find({})
    const flights = await Flight.find({}, {airline: 1, departingAirport: 1, flightNumber: 1, departureDate: 1} )

    console.log (airports, flights)
    //https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/#std-label-index-type-compound Actual indexing is a thing but it's just not clicking right now
} //Post-review notes for myself: so we were just supposed to find everything and console log it, not actually create an index or limit the info shown for the flights to just the things listed. ok cool.

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
//Post-review notes for myself: oh, it was supposed to be a console.log of the PLANE'S route, including arrival and departure times. I see now. The wording in "via a show route" made absolutely zero sense to me

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
    await Flight.create(newFlight) 
    console.log(newFlight)
} // ok this was fine

// Update the details for my Flights and Airports

// const updateFlight = async (a_line, flightNum, currency, seatNum, dAirportName, aAirportName, departDate) => {
//     const revisedFLight = (
//         {
//             airline: a_line,
//             flightNumber: flightNum,
//             price: currency,
//             numberOfSeats: seatNum,
//             departingAirport: await Airport.findOne({ name: dAirportName._id }),
//             arrivalAirport:  await Airport.findOne({ name: aAirportName._id }),
//             departureDate: new Date(departDate)
//         }
//     )
        //There's no way that a ridiculous function with eight different perameters, that makes you input info for fields you might not even want to change, is how to do this...

        //Post-review notes for myself:Ok, this was done as a conditional checking what item to update based on the argument passed into the function. The perameter "update" is the new value being assigned. At least updating only one thing is better than updating everything.
        const updateFlights = async (flightid, whatToUpdate, update) => {
            let updateFlight = ""
            if (whatToUpdate === "airline") {
                updateFlight = await Flight.findByIdAndUpdate(flightid, { airline: update})
            } else if (whatToUpdate === "flightNumber") {
                updateFlight = await Flight.findByIdAndUpdate(flightid, { flightNumber: update})
            } else if (whatToUpdate === "price") {
                updateFlight = await Flight.findByIdAndUpdate(flightid, { price: update})
            }
            else if (whatToUpdate === "numberOfSeats") {
                updateFlight = await Flight.findByIdAndUpdate(flightid, { numberOfSeats: update})
            }
            else if (whatToUpdate === "departingAirport") {
                updateFlight = await Flight.findByIdAndUpdate(flightid, { departingAirport: update})
            }
            else if (whatToUpdate === "arrivalAirport") {
                updateFlight = await Flight.findByIdAndUpdate(flightid, { arrivalAirport: update})
            }
            else if (whatToUpdate === "departureDateTime") {
                updateFlight = await Flight.findByIdAndUpdate(flightid, { DepartureDateTime: update})
            } else if (whatToUpdate === "arrivalDateTime") {
                updateFlight = await Flight.findByIdAndUpdate(flightid, { arrivalDateTime: update})
            }
            console.log(`On: ${updateFlight} \n Changes: ${whatToUpdate} ${update}`)
        }
        const updateAirports = async (id, whatToUpdate, update) => {
            let updateAirport = ""
            if (whatToUpdate === "name") {
                updateAirport = await Airport.findByIdAndUpdate(id, { name: update})
            } else if (whatToUpdate === "location") {
                updateAirport = await Airport.findByIdAndUpdate(id, { location: update})
            } else if (whatToUpdate === "code") {
                updateAirport = await Airport.findByIdAndUpdate(id, { code: update })
            }
            console.log(`On: ${updateAirport} \n Changes: ${whatToUpdate} ${update}`)
        }
        


// Delete any Flight and Airport
const deleteFlight = async (idNum) => {
    const del = await Flight.deleteOne({_id: `${idNum}` })
    console.log(del)
}

const deleteAirport = async (idNum) => {
    const del = await Airport.deleteOne({_id: `${idNum}` })
    console.log(del)
} //ok this is fine, just different

//run function:

const run = async () => {
    try{
        //await viewData()
        //await flightById('651cafa32425b23c57690363')
        //await createFLight('Pat-Lines', 124, 200, 4, 'Pineappleport', 'Big Rock', 2023-2-1)
        //await deleteFlight(`651df88459f04b5123eeb36b`)
    } catch (error){
        console.log(error)
    } finally {
        await db.close()
    }
}

run() 