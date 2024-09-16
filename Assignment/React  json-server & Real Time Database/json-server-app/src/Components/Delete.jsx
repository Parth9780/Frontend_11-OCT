
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

function Delete() {
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.delete(`http://localhost:8000/add_data/${id}`).then(() => {
            Swal.fire({
                title: "success!",
                text: "Data deleted successfully",
                icon: "success"
            });
        })
        navigate("/");

    }, []);


    return (
        <div>

        </div>
    )
}

export default Delete