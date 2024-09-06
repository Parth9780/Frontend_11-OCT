import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import axios from 'axios';


function DeleteTask() {
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.delete(`http://localhost:8000/Add-Task/${id}`).then(() => {
            Swal.fire({
                title: "success!",
                text: "Data deleted successfully",
                icon: "success"
            });
        })
        navigate("/");
    }, []);
    return (
        <>
        </>
    )
}

export default DeleteTask