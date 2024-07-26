const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    rol: {
        type: String,
        default: 'usuario',
        enum: ['usuario', 'admin']
    },
    blocked: {
        type: Boolean,
        default: false
    },  
    cart: []
})

const User = mongoose.model('User', userSchema)

module.exports = User