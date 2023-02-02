const express = require("express")
const {get,add,remove, update} = require("../controllers/todoController")

const route = express.Router()

route.get("/", get)
route.post("/", add)
route.put("/:id", update)
route.delete("/:id", remove)



module.exports = route