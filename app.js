const express = require('express')
const cors = require('cors')
const cookie = require('cookie-parser')
const userRouter = require('./routes/users.routes')
const userProduct = require('./routes/products.routes')

const app = express()

app.use(cookie())

app.use(express.json())
app.use(cors())


app.use(userRouter)
app.use(userProduct)

module.exports = app