import React from 'react'
import AddTask from './AddTask'
import ShowTask from './ShowTask'

function Layout() {
    return (
        <>
        <div className="w-6/12 mx-auto bg-gradient-to-br from-pink-400 to-blue-400 p-12 mt-20">
            <div className='text-center'>
                <h1 className='text-6xl font-semibold text-gray-800'>To Do List</h1>
            </div>
            <AddTask />
            <ShowTask />
        </div>
        </>
    )
}

export default Layout