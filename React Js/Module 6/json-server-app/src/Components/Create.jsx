import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
function Create() {
    const [data, setData] = useState([]);
    const Navigate = useNavigate();

    // stored all data in variables
    const name = useRef("");
    const phone = useRef("");
    const email = useRef("");
    const address = useRef("");
    const date = useRef("");

    // Add data
    const AddFormHandeler = (e) => {
        e.preventDefault();
        var insert = {
            name: name.current.value,
            phone: phone.current.value,
            email: email.current.value,
            address: address.current.value,
            date: date.current.value
        }

        axios.post(`http://localhost:8000/add_data`, insert).then(() => {
            // pass a message
            Swal.fire({
                title: "Wow",
                text: "Employee success fully add.",
                icon: "success"
            });
        })
        e.target.reset();
    }
    return (
        <>
            <div className='w-full bg-cyan-950 p-20'>
                <div className='w-9/12 mx-auto p-10 bg-orange-400 grow'>
                    <div className='text-center border-b-2 p-3 border-gray-600'>
                        <h1 className='text-5xl text-gray-800 font-semibold font-serif'>Add Employees</h1>
                    </div>
                    <form className='grid p-10' onSubmit={AddFormHandeler}>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className='mb-3 px-3'>
                                <label htmlFor="exampleFormControlInput1" className='text-xl text-gray-700 font-black p-3'>Enter Name *</label>
                                <input type="text" ref={name} className='w-full p-3 rounded-2xl mt-1 border-4 border-gray-100 focus:outline-none focus:border-gray-600' />
                            </div>
                            <div className='mb-3 px-3'>
                                <label htmlFor="exampleFormControlInput1" className='text-xl text-gray-700 font-black p-3'>Mobile Number *</label>
                                <input type="text" ref={phone} className='w-full p-3 rounded-2xl mt-1 border-4 border-gray-100 focus:outline-none focus:border-gray-600' />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className='mb-3 px-3'>
                                <label htmlFor="exampleFormControlInput1" className='text-xl text-gray-700 font-black p-3'>Email Address *</label>
                                <input type="email" ref={email} className='w-full p-3 rounded-2xl mt-1 border-4 border-gray-100 focus:outline-none focus:border-gray-600' />
                            </div>
                            <div className='mb-3 px-3'>
                                <label htmlFor="exampleFormControlInput1" className='text-xl text-gray-700 font-black p-3'>Joining Date *</label>
                                <input type="date" ref={date} className='w-full p-3 rounded-2xl mt-1 border-4 border-gray-100 focus:outline-none focus:border-gray-600' />
                            </div>
                        </div>
                        <div className='mb-3 px-3'>
                            <label htmlFor="exampleFormControlInput1" className='text-xl text-gray-700 font-black p-3'>House Address *</label>
                            <textarea type="text" ref={address} className='w-full p-3 rounded-2xl mt-1 border-4 border-gray-100 focus:outline-none focus:border-gray-600'></textarea>
                        </div>
                        <div className='mt-5 text-end font-mono font-semibold'>
                            <button type='submit' className='text-lg py-2 px-5 rounded-lg text-cyan-700 border-2 border-cyan-700 hover:bg-cyan-700 hover:text-gray-50'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create