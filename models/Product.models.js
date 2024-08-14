const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    discount: {
        type: Number,
        trim: true
    },
    image: {
        type: String,
        default: ''
    },
    quantity: {
        type: Number
    }
})

const ProductsModel = mongoose.model('Products', ProductSchema)

module.exports = ProductsModel