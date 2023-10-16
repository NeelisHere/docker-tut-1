const express = require('express')
const cors = require('cors')
const router = require('./routes.js')
const connectDB = require('./db.js')
require('dotenv').config();
connectDB()
const app = express()
const port = 8000

// app.use(cors())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
}))
app.use(express.json())
app.use('/news', router)


app.get('/', (req, res) => {
    res.json([
        { success: true },
    ])
})


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})

