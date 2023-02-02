const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
mongoose.set('strictQuery', false)

const app = express()


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


//Middleware
app.use(express.json())
app.use(cors())
app.use("api/todo", () => {
    
})

