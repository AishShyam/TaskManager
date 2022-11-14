const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())

// app.get('/', (req,res) => {
//     console.log("Get request")
//     res.send("Hello World")
// })

app.use('/api/v1/tasks', tasks)



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, () => {
            console.log("listening on port 5000")
        })
    } catch (error) {
        console.log(error)
    }
}

start()