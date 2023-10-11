const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const createAirports = async () => {
    const airports =  [{ 
            name: 'Midway',
            location: 'Chicago, IL',
            code: 'MDW'
        },
        {
            name: 'Ohare',
            location: 'Chicago, IL',
            code: 'ORD'
        },
        {
            name: 'LaGuardia',
            location: 'New York, New York',
            code: 'LGA'
        },
        {
            name: 'Nashville Intl',
            location: 'Nashville, Tennesse',
            code: 'BNA'     
        },
       
    ]

    await Airport.insertMany(airports)
    console.log('Created Airport!')
    }
const run = async () => {
    await createAirports()
    db.close()
}   

run()