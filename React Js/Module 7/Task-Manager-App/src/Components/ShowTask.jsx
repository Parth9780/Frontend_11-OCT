import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ShowTask() {
    const [data, setData] = useState();
    const navigate = useNavigate();
    // fetch all dynamic data
    useEffect(() => {
        // fetch data here
        axios.get(`http://localhost:8000/Add-Task`).then((response) => {
            setData(response.data);
        })
    }, [data]);
    return (
        <>
            <table className="w-10/12 mx-auto mt-10">
                <tbody>
                    {data && data.map((task) => {
                        return (
                            <>
                                <tr className="text-lg font-bold border-b-4 border-black">
                                    <td>{task.task}</td>
                                    <td className="text-white"><button className="ms-28">Edit</button></td>
                                    <td><button type="button" className="text-white" onClick={() => { navigate(`/DeleteTask/${task.id}`) }}>Delete</button></td>
                                </tr>
                                <br />
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ShowTask