### SEIR 0911EC

# Mongoose Flights Lab

## Intro

For this lab, lets create a database of Flights and use a model of Flights and Airports.

You'll begin by creating a `mongoose-flights` project using our usual commands (feel free to reference previous lessons for this!)
```sh
npm init -y
npm i mongoose
```

What folders and files we will we need to create as well?

## Exercises

1) Populate your **db/index.js** file that connects to a database, we can call it "flightsDatabase".


2) Create a Model of Airport with the following properties:

	| Property | Type |
	|---|---|
	| `name`| `String`|  (Logan, LaGuardia, Heathrow, O'Hare, Pearson...)
	| `location`| `String`| (Boston, New York, London, Chicago, Toronto...)
	| `code`| `String`|    (LGN, LGA, HRT, OHR, YYZ...)



3) Create a `Flight` Model with the following properties, making sure its linked to the respective airports they'll be flying in and out of:
   - If you are feeling comfortable so far, use both Departing and Arriving Airports in your model. If you are still wrapping your head around Relations, feel free to just use one!

	| Property | Type |
	|---|---|
	| `airline`| `String`| ('American', 'Southwest', 'Delta'...)
	 |`flight number` |`Integer`| 
	 |`price`|`float`| 
	 |`numberOfSeats`|`integer`|
	 |`departingAirport`| `ref - airport_id`| 
	 |`arrivalAirport`|`ref - airport_id`| 
	 |`departure date/time` | Your choice! How do you think we should add this in? |
	 
	 
	 Which of our models is the Parent, which is the Child? How are we connecting the two?

4. Seed your db with at least 4 airports and at least 7 flights. Use your Mongo shell, or your query.js file to Read all of your data before working with the User Stories tasks in the following prompt. 

5. Implement the following User Stories:
	- As A User (AAU), I want to view a list of all flights and airports (`index` functionality) that displays each flight's airline, airport, flight no., and departure date/time (consider formatting the `departs` property).

	    <!-- const findAllFlights = async () => {
        const flights = await Flight.find()
        console.log('All flights', flights)
      }
      const findAllAirports = async () => {
        const airports = await Airport.find()
        console.log('All airports:', airports)
      }
      const run = async () => {
        try {
            await findAllFlights()
            await findAllAirports()
        } catch (error) {
          console.log(error)
        } finally {
          await db.close()
        } -->
	
	- AAU, I want to be able to access the details for each of these objects via a Show route based on the object's ID


    <!-- const db = require('./db')
	const { Flight, Airport } = require('./models')
	
	db.on('error', console.error.bind(console, 'MongoDB connection error:'))

	const findAllAirports = async (code) => {
        const airport =  await Airport.find(code)
        console.log(airport)
    }
    const findAllFlights = async (flightNumber) => {
        const flight = await Flight.find.findById(flightNumber).populate('departing_airport_id').populate('arrival_airport_id')
            console.log(flight)
    }

    const run = async () => {
        try {
            await findAllFlights()
            await findAllAirports()
        } catch (error) {
          console.log(error)
        } finally {
          await db.close()
        }

	}
	run() -->



	- AAU, I want to create flights by entering the information for Airports and Flights using a Query.js file that you will create
	<!-- 
	const db = require('./db')
	const { Flight, Airport } = require('./models')


	const createFlights = async () => {
		const flights = [
				airline:  'Airline name',
				flight number:	'Flight number as numebr',
				price:	'Price as number',
				numberOfSeats: 'Amount of seats as number',
				departingAirport:	'departing_airport_id',
				arrivalAirport: 'arrival_airport_id',
				departure_date_time: '<YYYY-mm-ddTHH:MM:ss>'
				]
			})
		})
		await Flight.insertMany(flights)
		console.log('Created Flights!')
		return flights
	} 
	const createFlightsWithAirports = async (airports) => {
    console.log(airports)
    let lenOfItems = 100
    const airports = [
            name: 'Airport Name',
            location: 'Airport location',
            code: 'Airport code',
            
        }
    })
		await Flight.insertMany(flights)
		console.log('Created Flights!')
	}

	const run = async () => {
		const airports = await createAirports()
		await createFlightsWithAirports(airports)
		db.close()
	}

	run()
	-->



	
	- AAU, I want to be able to update the details for my Flights and Airports
	<!-- const updateFlights = async () => {
	const updatedFlight = await Flight.updateOne(
	[
					{airline:  'Airline name'},
					{flight number:	'Flight number as numebr'},
					{departure_date_time: '<YYYY-mm-ddTHH:MM:ss>'}
					]
	)
	console.log(updated)
	}
	const updateAirports = async () => {
	const updatedAirport = await Airport.updateOne(
		{ name: 'New Airport Name' },
		{ code: 'New Airport code' }
	)
	console.log(updated)
	}
		 -->
	- AAU, I want to be able to delete any Flight and Airport
	<!--const deleteFlights = async () => {
		const deleteFlight = await Flight.deleteOne({ flightNumber:  717  })
		console.log(deleted)
		}
		const deleteAirports = async () => {
		const deletedAirport = await Airport.deleteOne({ name: 'Airport Name' })
		console.log(deleted)
		}
			-->





#### Hints:

- Checkout the [Date datatype 
](https://www.mongodb.com/docs/manual/reference/method/Date/) to assist users in entering valid date/time values.

## Bonuses


1. Code these additional User Stories:
	- AAU, I want to view the list of flights by departure date in ascending order.
	
	- AAU, I want the flights in the list to not be displayed if the flight's departure date and time have passed.

	- AAU, I want to see all flights from California to New York by descending price (hint - you may need to create a number of Flight objects that meet this requirement. You can use JFK and LGA for New York airports, and LAX and SFO for California's)

