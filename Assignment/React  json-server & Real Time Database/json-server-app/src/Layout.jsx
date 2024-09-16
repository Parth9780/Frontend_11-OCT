import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Layout() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/add_data`).then((responce) => {
            setData(responce.data);
        });
    }, [data]);

    return (
        <>
            <div className='w-full bg-cyan-950 p-20'>
                <div className='w-11/12 mx-auto p-10  bg-rose-500 grow'>
                    <div className='w-full py-12'>
                        <h1 className='text-5xl text-center text-gray-100 font-semibold font-serif'>Employees Data</h1>
                        <div className='text-end'>
                            <Link to={'/add-data'} className='text-xl bg-cyan-950 hover:bg-gray-800 p-3 text-gray-200 rounded-xl'>Add-Employee</Link>
                        </div>
                    </div>
                    <div>
                        <table className='mx-auto'>
                            <tbody>
                                <tr className=''>
                                    <th className='px-5 py-2 font-extrabold text-lg text-gray-900 border-2 border-cyan-200'>#id</th>
                                    <th className='px-5 py-2 font-extrabold text-lg text-gray-900 border-2 border-cyan-200'>Name</th>
                                    <th className='px-5 py-2 font-extrabold text-lg text-gray-900 border-2 border-cyan-200'>Mobile</th>
                                    <th className='px-5 py-2 font-extrabold text-lg text-gray-900 border-2 border-cyan-200'>Email</th>
                                    <th className='px-5 py-2 font-extrabold text-lg text-gray-900 border-2 border-cyan-200'>Address</th>
                                    <th className='px-5 py-2 font-extrabold text-lg text-gray-900 border-2 border-cyan-200'>Date</th>
                                    <th className='px-5 py-2 font-extrabold text-lg text-gray-900 border-2 border-cyan-200'>Action</th>
                                </tr>
                                {data && data.map((row) => {
                                    return (
                                        <>
                                            <tr className=''>
                                                <td className='px-5 py-2 border-2 border-cyan-200 text-gray-800'>{row.id}</td>
                                                <td className='px-5 py-2 border-2 border-cyan-200 text-gray-800'>{row.name}</td>
                                                <td className='px-5 py-2 border-2 border-cyan-200 text-gray-800'>{row.phone}</td>
                                                <td className='px-5 py-2 border-2 border-cyan-200 text-gray-800'>{row.email}</td>
                                                <td className='px-5 py-2 border-2 border-cyan-200 text-gray-800'>{row.address}</td>
                                                <td className='px-5 py-2 border-2 border-cyan-200 text-gray-800'>{row.date}</td>
                                                <td className='px-2 py-2 border-2 border-cyan-200 text-gray-800 text-center'>
                                                    <button type='button' onClick={()=>{navigate(`/edit/${row.id}`)}} className='pe-2 text-lg'><span className='bi bi-pencil'></span></button>
                                                    <button type='button' onClick={()=>{navigate(`/delete/${row.id}`)}} className='text-lg ps-2 border-s-2'><span className='bi bi-trash3-fill'></span></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout