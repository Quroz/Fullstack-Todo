import React, { useState } from 'react'
import axios from "axios"

function AddTodo({ setIsAddButton, isAddButton }) {

    const [title, setTitle] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    function onClickHandler() {

        axios.post("http://localhost:4000/api/todo/", {
            title: title,
            description: "placeholder"
        }).then((res) => console.log(res))
            .catch((err) =>
                setErrorMessage(err.response.data.message));
        setTitle("")
        window.location.reload();
    }

    return (
        <div className='bg-gray-400 absolute rounded-lg p-7 z-50 left-[20%] top-[30%] w-[300px]'>
            <div className='flex flex-col gap-2 relative'>
                <div className='h-[8px] w-[8px] bg-black absolute right-0 rounded-full cursor-pointer'
                    onClick={() => setIsAddButton(!isAddButton)}
                />
                <h1>ADD TASK</h1>
                <div className='flex flex-col gap-1'>
                    <input className='rounded-md indent-2 outline-none py-1 shadow-2xl' type="text"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <h1 className='text-red-500 font-thin text-xs'>{errorMessage}</h1>
                </div>
                <button className='bg-blue-500 rounded-3xl py-2 w-[50%] text-white text-sm px-3 hover:bg-blue-400'
                    onClick={onClickHandler}
                >CREATE TASK</button>
            </div>
        </div>

    )
}

export default AddTodo