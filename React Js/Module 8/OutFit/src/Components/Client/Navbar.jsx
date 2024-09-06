import React from 'react'
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="w-full bg-blue-950 text-white flex">
                <div className="row lg:flex md:inline-block text-center mx-auto">
                    <div className="lg:mx-10 md-6 sm-6 p">
                        <img src="https://download.logo.wine/logo/Outfit7/Outfit7-Logo.wine.png" className='w-36' alt="Outfit7-Logo" />
                    </div>
                    <div className='lg:mx-72'>
                        <ul className='lg:flex flex-row sm:inline-block mx-auto'>
                            <li className='px-5 mt-8 font-bold'>
                                <a href="#" className='hover:text-gray-400'>Home</a>
                            </li>
                            <li className='px-5 mt-8 font-bold'>
                                <a href="#" className='hover:text-gray-400'>Shop</a>
                            </li>
                            <li className='px-5 mt-8 font-bold'>
                                <a href="#" className='hover:text-gray-400'>Best Sell</a>
                            </li>
                            <li className='px-5 mt-8 font-bold'>
                                <a href="#" className='hover:text-gray-400'>Customer Service</a>
                            </li>
                            <li className='px-5 mt-8 font-bold'>
                                <a href="#" className='hover:text-gray-400'>Gift Ideas</a>
                            </li>
                        </ul>
                    </div>
                    <div className='mx-10'>
                        <button className='mt-7 mx-auto bg-gradient-to-r from-red-600 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale:105 px-6 py-2 rounded-full'>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar