import React, { useState } from 'react'
import { FaShopify } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";
import Button from './Button';

function Navbar() {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "SHOP NOW", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "BLOGS", link: "/" },
        { name: "CONTACTS", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <>
            <div className="shadow-md w-full bg-gray-800 fixed top-0 left-0">
                <div className='items-center justify-between lg:flex md-flex py-4 md:px-10 px-7'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white'>
                        <span className='text-3xl text-green-300 mr-1 pt-2'>
                            <FaShopify ></FaShopify>
                        </span>
                        <span className='text-green-300'>Shopy</span>Cart
                    </div>
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
                        <ion-icon name={open ? 'close':'menu'}></ion-icon>
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 md:z-auto z[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 text-white hover:text-green-300 duration-500'>
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))
                        }
                        {/* <Button>
                        Me Cart
                    </Button> */}
                        <Button>
                            Account
                        </Button>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar