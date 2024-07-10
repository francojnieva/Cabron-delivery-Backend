const app = require('./app')
const connectDB = require('./db')

connectDB()

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server OK on port ${PORT}`)
})



