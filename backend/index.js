const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const todoRoute = require("./routes/todoRoute")
mongoose.set('strictQuery', false)

const app = express()

//Middleware
app.use(express.json())
app.use(cors())

//Routes
app.use("/api/todo", todoRoute)

mongoose.connect("mongodb+srv://user123:Sommar13@cluster0.qtewhwg.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: false
}).then(() => {
    console.log("Connected to db")
    app.listen("4000", () => {
        console.log("Server listening on port 4000")
    })
}).catch((e) => {
    console.error(e)
})



