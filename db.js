const mongoose = require('mongoose')

const connectDB = async () => {
    try {
       await mongoose.connect(process.env.CONNECTION_DB)
       console.log('Connected DB')
    } catch (error) {
        console.log('Error connecting to DB', error)
    }
}

module.exports = connectDB



