import axios from 'axios'
import React from 'react'

function Todos({ todos }) {

    function handleDelete(id) {
        console.log(id)
        axios.delete(`http://localhost:4000/api/todo/${id}`).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })
        window.location.reload()
    }

    return (
        <div className='w-[500px] flex flex-col gap-4 overflow-scroll'>
            {todos.map((todo) => (
                <div className='flex items-center justify-between w-full px-5 bg-[#466292] py-2 rounded-lg' key={todo._id}>
                    <h1 className='text-white font-medium w-[30%] text-ellipsis overflow-hidden ...'>{todo.title}</h1>
                    <div className='rounded-full bg-red-500 p-2 cursor-pointer hover:bg-red-400'
                        onClick={() => handleDelete(todo._id)}
                    />
                </div>
            ))}
        </div>
    )
}

export default Todos