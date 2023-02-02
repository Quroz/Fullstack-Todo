const Todo = require("../models/todoModel")
const mongoose = require("mongoose")
const { findOne } = require("../models/todoModel")

async function get(req,res) {

    try {
        const todo = await Todo.find()
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}


async function add(req,res) {
    const {title, description} = req.body

    try {
        const existTitle = await findOne({title})

        if(existTitle)  //Check if title already exists
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