const db = require('./db')
const { Airport, Flight } = require('./models')

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

// const userStoryThree = async ()


async function main() {
    try {
        // await userStoryOne()
        await userStoryTwo("651c761ed223414737bf4fe5")
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }
  
  main()
  