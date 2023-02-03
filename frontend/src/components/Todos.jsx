import React from 'react'

function Todos() {
    return (
        <div className='w-[40%] flex flex-col gap-4 overflow-scroll'>
            <div className='flex items-center justify-between w-full px-5 bg-[#466292] py-2 rounded-lg'>
                <h1>Test Todo</h1>
                <div className='rounded-full bg-red-500 p-2' />
            </div>

        </div>
    )
}

export default Todos