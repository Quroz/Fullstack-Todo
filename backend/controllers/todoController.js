const Todo = require("../models/todoModel")
const mongoose = require("mongoose")


async function get(req,res) {

    try {
        const todo = await Todo.find()
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}


async function add(req,res) {

    const {title, description} = req.body
  
    try {
        const existTitle = await Todo.findOne({title})
  
        if(existTitle.title)  //Check if title already exists
           return res.status(400).json({message: "This title already exists"})
        
        const addedTodo = await Todo.create({   //Creating new todo
            title,
            description
        })

       return res.status(200).json(addedTodo)

    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}

async function remove(req,res){
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).send({error: "Could not delete the item"})
    }

    try {
        const deletedTodo = await Todo.findByIdAndDelete(id)
        res.status(200).json(deletedTodo)
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}


async function update(req,res){
    
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }
    
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body)
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}



module.exports = {get,add,remove, update}