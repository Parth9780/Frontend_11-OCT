import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    const [data, setData] = useState();
    // fetch all dynamic data
    useEffect(() => {
        // fetch data here
        axios.get(`http://localhost:8000/Slider`).then((response) => {
            setData(response.data);
        })
    }, [data]);
    return (
        <>
            <div className="w-full">
                    <Carousel className='z[-1]'>
                        {
                            data && data.map((slider) => {
                                return (
                                    <>
                                        <div>
                                            <img src={slider.img} className='w-full md:h-80' style={{ height: "500px" }} />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </Carousel>
            </div>
        </>
    )
}

export default Slider