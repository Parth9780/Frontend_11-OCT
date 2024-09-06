import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

function AddTask() {
    const task = useRef("");

    // const Navigate = useNavigate();
    const addData = (e) => {
        e.preventDefault();
        var ins = {
            task: task.current.value
        }

        // Call Your Api
        axios.post(`http://localhost:8000/Add-Task`, ins).then(() => {
            //Pass Message
            Swal.fire({
                title: "Wow!",
                text: "Your Task Added successfully!",
                icon: "success"
            });
            // Navigate('/');
        })
        e.target.reset();
    }
    return (
        <>
            <form onSubmit={addData}>
                <div className='form-group text-center mt-9'>
                    <input type="text" ref={task} placeholder='What Will You Do?' className='form-control w-8/12 me-5 p-3 rounded-2xl border-2 focus:outline-none focus:border-blue-800' />
                    <button type='submit' className='bg-black text-white text-3xl py-1 px-3' style={{ borderRadius: "50%" }}>+</button>
                </div>
            </form>
        </>
    )
}

export default AddTask