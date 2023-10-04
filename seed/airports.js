const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = [
        {
            name: 'Pineappleport',
            location: '300 Pineapple Way',
            code: '1111'
        },
        {
            name: 'Big Rock',
            location: '1020 Bounder Blvd.',
            code: '2222'
        },
        {
            name: 'Easter Island Head',
            location: '521 South Island St.',
            code: '3333'
        },
        {
            name: 'Tree Dome',
            location: 'The Dome on East',
            code: "4444"
        }
    ]
    const allAirports = await Airport.insertMany(airports)
    console.log(allAirports)
}

const run = async () => {
    await main()
    db.close()
}

run()
