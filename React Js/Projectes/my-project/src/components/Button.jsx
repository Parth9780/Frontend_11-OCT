import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function Button(props) {
    return (
        <button className='bg-green-300 text-gray-800 font-[poppins] flex py-2 px-6 rounded md:ml-8 hover:bg-gradient-to-r from-green-300 to-green-600 duration-500'>
            {props.children}
        </button>
        
    )
}

export default Button