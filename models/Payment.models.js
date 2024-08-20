const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        trim: true
    },
    userEmail: {
        type: String,
        trim: true
    }
})

const PaymentModel = mongoose.model('Payments', PaymentSchema)

module.exports = PaymentModel