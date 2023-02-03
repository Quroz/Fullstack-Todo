import React, { useState, useEffect } from 'react'
import Todos from '../components/Todos'
import axios from "axios"

const api = "http://localhost:4000/api/todo/"

function HomeRoute() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get(api).then((res) => {
      console.log(res.data[0])
      setTodos(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className='h-screen w-full bg-[#202B3E]'>
      <div className='w-full h-full p-7 flex flex-col gap-3'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-bold text-white'>Welcome, Filip</h1>
          <p className='font-light text-gray-400'>Your tasks</p>
        </div>
        <Todos todos={todos} />
      </div>
    </div>
  )
}

export default HomeRoute