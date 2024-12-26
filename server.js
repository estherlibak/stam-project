require("dotenv").config()
const express=require("express")
const cors=require("cors")
const mongoose = require('mongoose')
const corsOptions = require("./config/corsOptions")
const connectDB = require("./confiG/dbConn")
const PORT = process.env.PORT|| 1234
const app = express()
connectDB()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.use("/api/tasks", require("./routes/task"))
app.use("/api/article",require("./routes/Article"))

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
    })
    mongoose.connection.on('error', err => {
    console.log(err)
    })

