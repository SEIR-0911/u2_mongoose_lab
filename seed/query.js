//....from Sammy's share
const userStoryOne = aync () => {
    const flightsandAirports = await Flight.find({}, airline:1, flightNumber:1, departingAirport:1)
}
//....