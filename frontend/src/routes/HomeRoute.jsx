import React, { useState, useEffect } from 'react'
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo'
import axios from "axios"

const api = "http://localhost:4000/api/todo/"

function HomeRoute() {

  const [todos, setTodos] = useState([])
  const [isAddButton, setIsAddButton] = useState(false)

  useEffect(() => {
    axios.get(api).then((res) => {
      setTodos(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [todos])

  return (
    <div className='h-screen w-full bg-[#202B3E]'>
      {isAddButton && <AddTodo
        setIsAddButton={setIsAddButton}
        isAddButton={isAddButton}
        todos={todos}
        setTodos={setTodos}
      />}
      <div className='w-full h-full p-7 flex flex-col gap-3'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-bold text-white'>Welcome, Filip</h1>
          <p className='font-light text-gray-400'>Your tasks</p>
        </div>
        <Todos todos={todos} setTodos={setTodos} />
      </div>
      <div className='absolute bottom-0 rounded-full h-[50px] w-[50px] m-5 bg-green-500 right-0 flex items-center justify-center cursor-pointer hover:bg-green-400'
        onClick={() => setIsAddButton(!isAddButton)}
      >
        <div className='rounded-full h-[10px] w-[10px] bg-white' />
      </div>

    </div>
  )
}

export default HomeRoute