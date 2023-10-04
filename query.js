const db = require('./db')
const {Airport, Flight} = require ('./models')

//As A User (AAU), I want to view a list of all flights and airports (index functionality) that displays each flight's airline, airport, flight no., and departure date/time
const findFlights = async() => {
    const flights = await Flight.find()
    flights.forEach(element => {
        console.log(`airline: ${element.airline}`)
        console.log(`departing airport: ${element.departingAirport}`)
        console.log(`flight no: ${element.flight_number}`)
        console.log(`departure date/time: ${element.departure_date_time}`)
    });
}

const findAirports = async() => {
    const airports = await Airport.find()
    airports.forEach(element => {
        console.log(`airport name: ${element.name}`)
    });
}

//AAU, I want to be able to access the details for each of these objects via a Show route based on the object's ID
const findAirportById = async(airportId) => {
    const airport = await Airport.find({_id: airportId})
    console.log(airport)
}

const findFlightById = async(flightId) => {
    const flight = await Flight.findById(flightId)
    console.log(flight)
}

//AAU, I want to create flights by entering the information for Airports and Flights using a Query.js file that you will create
const createFlight = async(_airline, _flight_number, _price, _numberOfSeats, _departingAirport, _arrivalAirport, _departure_date_time) => {
    const flight = await Airport.insertOne(
        {
            airline: _airline,
            flight_number: _flight_number,
            price: _price,
            numberOfSeats: _numberOfSeats,
            departingAirport: _departingAirport,
            arrivalAirport: _arrivalAirport,
            departure_date_time:  _departure_date_time,
        }
    )
}
const createAirport = async(_name, _location, _code) => {
    const airport = await Flight.insertOne(
        {
            name: _name,
            location: _location,
            code: _code,
        }
    )
}

//AAU, I want to be able to update the details for my Flights and Airports
const updateFlight = async (_flightId, newAirline, newFlightNumber, newPrice, newNumberOfSeats, newDepartingAirport,newArrivalAirport, newDeparture_date_time) => {
    const updated = await Flight.updateOne(
        {_id: _flightId},
        {
            airline: newAirline,
            flight_number: newFlightNumber,
            price: newPrice,
            numberOfSeats: newNumberOfSeats,
            departingAirport: newDepartingAirport,
            arrivalAirport: newArrivalAirport,
            departure_date_time:  newDeparture_date_time,
        }
    )
}
const updateAirport = async (_airportId, newName, newLocation, newCode) => {
    const updated = await Airport.updateOne(
        {_airportId},
        {
            name: newName,
            location: newLocation,
            code: newCode,
        }
    )
}

//AAU, I want to be able to delete any Flight and Airport
const deleteFlight = async (_flightId) => {
    const deleted = await Flight.deleteOne({_id: _flightId})
}

const deleteAirport = async (_airportId) => {
    const deleted = await Airport.deleteOne({_id: _airportId})
}

async function main () {
    try{
        //await findFlights()
        //await findAirports()
        //await findAirportById('651cc3dab57c64e006b3762d')
        //await findFlightById()
        //await createFlight('American Airlines', 3452, 575, 435, 'Dallas Love Field', 'Austin Bergstrom International Airport', new Date('2023-10-15T08:35:00'))
        //await createAirport('Los Angeles International Airport', 'Los Angeles, CA', 'LAX')
        //await updateFlight(_flightId, 'Virgin Atlantic', 5643, 500, 345, 'Austin Bergstrom International Airport','Dallas Love Field', new Date('2023-10-12T12:45:00'))
        //await updateAirport('651cc3dab57c64e006b3762c', "Chicago O'Hare International Airport", "Chicago, IL", "ORD")
        //await deleteFLight(_flightId)
        //await deleteAirport('651cc3dab57c64e006b3762b')
    }
    catch(error){
        console.log(error)
    }
    finally{ 
        await db.close()
    }
}

main()