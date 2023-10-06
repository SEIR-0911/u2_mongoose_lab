const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const createAirports = async () => {
    const airports =  [{ 
            name: 'John F Kennedy Intl',
            location: 'New York, New York',
            code: 'JFK'
        },
        {
            name: 'Los Angeles Intl',
            location: 'Los Angeles',
            code: 'LAX'
        },
        {
            name: 'Nashville Intl',
            location: 'Nashville, Tennesse',
            code: 'BNA'     
        },
        {
            name: 'LaGuardia',
            location: 'New York, New York',
            code: 'LGA'
        }
    
    ]

    await Airport.insertMany(airports)
    console.log('Created Airport!')
    }
const run = async () => {
    await createAirports()
    db.close()
}   

run()