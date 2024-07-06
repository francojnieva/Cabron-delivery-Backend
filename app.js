const express = require('express')
const cors = require('cors')
const cookie = require('cookie-parser')
const router = require('./routes/users.routes')

const app = express()

app.use(cookie())

app.use(express.json())
app.use(cors())


app.use(router)

module.exports = app