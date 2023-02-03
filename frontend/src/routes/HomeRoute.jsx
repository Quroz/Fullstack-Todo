import React from 'react'
import Todos from '../components/Todos'

function HomeRoute() {
  return (
    <div className='h-screen w-full bg-[#202B3E]'>
      <div className='w-full h-full p-7 flex flex-col gap-3'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-bold text-white'>Welcome, Filip</h1>
          <p className='font-light text-gray-400'>Your tasks</p>
        </div>
        <Todos />
      </div>
    </div>
  )
}

export default HomeRoute