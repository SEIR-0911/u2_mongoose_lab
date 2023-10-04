const db = require('./db')
// const prompt = require("prompt-async")
//https://www.npmjs.com/package/prompt-async
const { Airport, Flight } = require('./models')


const findAll = async () => {
    const airports = await Airport.find()
    const flights = await Flight.find()

    console.log(airports, flights)
}

//User Story 1


const userStoryOne = async () => {
    const flights = await Flight.find({}, {airline:1, flightNumber:1, departingDateTime:1, departingAirport:1})
    .populate('departingAirport', 'name')
    .exec()
    // console.log(flights)
    
    const formattedFlights = flights.map((flight) => ({
        airline: flight.airline,
        flightNumber: flight.flightNumber,
        departureDateTime: flight.departingDateTime,
        departingAirport: flight.departingAirport.name, // Access the name property
      }));
    
    
    console.log('UserStoryOne:', formattedFlights)   


}

//User Story 2

//     _id: new ObjectId("651c761ed223414737bf4fe5"),

const userStoryTwo = async (myFlightID) => {
    const myFlight = await Flight.findById(myFlightID)
    .populate('departingAirport')
    .populate(`arrivalAirport`)
    .exec()
    
    // console.log(myFlight)

    const formattedMyFlight = {
        airline: myFlight.airline,
        flightNumber: myFlight.flightNumber,
        price: myFlight.price,
        departureInformation: {
            departureTime: myFlight.departingDateTime,
            name: myFlight.departingAirport.name,
            location: myFlight.departingAirport.location,
            code: myFlight.departingAirport.code
        },
        arrivalInformation: {
            ArrivalTime: myFlight.arrivalDateTime,
            name: myFlight.arrivalAirport.name,
            location: myFlight.arrivalAirport.location,
            code: myFlight.arrivalAirport.code
        }
    }
    console.log(formattedMyFlight)
}

//User Story 3


// const getAirport = () => {
//     console.log("Enter new airport information")
//     let airportName = prompt(`Airport Name:`)
//     let airportLocation = prompt(`Airport Name:`)
//     let airportCode = prompt(`Airport Code:`)
//     let airportArray = [airportName,airportLocation,airportCode]
//     return airportArray
// }

const userStoryThree = async () => {
    
    // prompt.start()

    // const airportName = await prompt.get(`Airport Name:`)
    // const airportLocation = await prompt.get(`Airport Name:`)
    // const airportCode = await prompt.get(`Airport Code:`)

    let airportName = `Baltimore Washington International`
    let airportLocation = `Baltimore, MD`
    let airportCode = `BWI`
    
    const newAirport = await Airport.create({
        name: `${airportName}`,
        location: `${airportLocation}`,
        code: `${airportCode}`
    })
    


    let newAirline = `United`
    let newFlightNumber = 123
    let newPrice = 500
    let newNumberOfSeats = 600
    let newDepartingAirportCode = `651c8f33c926127fa52f065b`
    let newArrivalAirportCode = `651c702fda0debf335ec30bc`
    let newDepartingDateTime = `2023-10-04T00:01:00`
    let newArrivalDateTime = `2023-10-04T00:01:00`

    // const newArrivalAirport = await Airport.find({code: newArrivalAirportCode}, {_id:1})

    // const newDepartingAirport = await Airport.find({code: newDepartingAirportCode}, {_id:1})

    const newFlight = await Flight.create({
        airline: newAirline,
        flightNumber: newFlightNumber,
        price: newPrice,
        numberOfSeats: newNumberOfSeats,
        departingAirport: newDepartingAirportCode,
        arrivalAirport: newArrivalAirportCode,
        departingDateTime: newDepartingDateTime, //
        arrivalDateTime: newArrivalDateTime //
    })

    const airports = await Airport.find()
    console.log(airports)

    const flights = await Flight.find()
    console.log(flights)
    
}

const userStoryFour = async () => {
    //https://mongoosejs.com/docs/tutorials/findoneandupdate.html

    //Update Airport

    const airportCode = `BSL`

    const aFilter = { code: airportCode }
    const aUpdate = { name: `EuroAirport Basel Mulhouse Freiburg V3` }

    let updatedAirport = await Airport.findOneAndUpdate(aFilter, aUpdate, {new: true})
    console.log(updatedAirport)

    //Update Flight
    const searchAirline = `United`
    const searchFlightNumber = 1234

    const fFilter = { airline: searchAirline, flightNumber: searchFlightNumber }
    const fUpdate = { price: 1400 }

    let updatedFlight = await Flight.findOneAndUpdate(fFilter, fUpdate, {new: true})
    console.log(updatedFlight)
}

const userStoryFive = async () => {
    //delete Airport
    const deleteAirportID = `651d393accfad96112ba7995`
    await Airport.findByIdAndDelete(deleteAirportID)

    //delete Flight
    const flightFilter = { price: { $lte: 100 } }
    await Flight.findOneAndDelete(flightFilter)

}

async function main() {
    try {
        // await userStoryOne()
        // await userStoryTwo("651c761ed223414737bf4fe5")
        // await userStoryThree()
        // await userStoryFour()
        await userStoryFive()
        await findAll()
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }
  
  main()
  