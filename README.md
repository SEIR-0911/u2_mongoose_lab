### SEIR 0911EC

# Mongoose Flights Lab

## Intro

For this lab, lets create a database of Flights and use a model of Flights and Airports.

You'll begin by creating a `mongoose-flights` project using our usual commands (feel free to reference previous lessons for this!)
```sh
npm init -y
npm i mongoose
mkdir db models seed
touch db/index.js models/{user,task,index}.js seed/tasksUsers.js query.js
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
	
	- AAU, I want to be able to access the details for each of these objects via a Show route based on the object's ID

	- AAU, I want to create flights by entering the information for Airports and Flights using a Query.js file that you will create
	
	- AAU, I want to be able to update the details for my Flights and Airports
	
	- AAU, I want to be able to delete any Flight and Airport
	

#### Hints:

- Checkout the [Date datatype 
](https://www.mongodb.com/docs/manual/reference/method/Date/) to assist users in entering valid date/time values.

## Bonuses


1. Code these additional User Stories:
	- AAU, I want to view the list of flights by departure date in ascending order.
	
	- AAU, I want the flights in the list to not be displayed if the flight's departure date and time have passed.

	- AAU, I want to see all flights from California to New York by descending price (hint - you may need to create a number of Flight objects that meet this requirement. You can use JFK and LGA for New York airports, and LAX and SFO for California's)

