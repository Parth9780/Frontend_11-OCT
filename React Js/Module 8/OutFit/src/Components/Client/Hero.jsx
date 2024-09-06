import React from 'react'

function Hero() {
    const data = [
        {
            img: "https://m.media-amazon.com/images/I/61oazlJktvL._SY741_.jpg",
            Name: "Splash Women's Fine Knitted Petticoat",
            oldPrice: 1200,
            newPrice: 900
        },
        {
            img: "https://m.media-amazon.com/images/I/61AiC7cu2fS._SX679_.jpg",
            Name: "TRENDY FAB Women's Long Rayon Maxi Gown (Multicolour, Free Size)",
            oldPrice: 1600,
            newPrice: 1100
        },
        {
            img: "https://m.media-amazon.com/images/I/81DYxXtCVqL._SY741_.jpg",
            Name: "madhuram Women's Long Gown for Solid Georgette",
            oldPrice: 2000,
            newPrice: 1600
        },
        {
            img:"https://m.media-amazon.com/images/I/71dsX5cwNSL._SY741_.jpg",
            Name:"EthnicJunction Women Chanderi Cotton Un-stitched Salwar Kameez Dress Material Size",
            oldPrice:1650,
            newPrice:1200
        },
        {
            img:"https://m.media-amazon.com/images/I/71mtw+e95QL._SX679_.jpg",
            Name:"London Hills Men's Casual Printed Round Neck, Oversized Longline Drop Shoulder Boho Style T-Shirt",
            oldPrice:550,
            newPrice:283
        },
        {
            img:"https://m.media-amazon.com/images/I/81AnG-j7YpL._SX569_.jpg",
            Name:"House & Shields Men's Casual Shirt",
            oldPrice:570,
            newPrice:340
        },
        {
            img:"https://m.media-amazon.com/images/I/71LsMoFPOlL._SY879_.jpg",
            Name:"London Hills Oversized t Shirts for Men Loose fit t Shirt Drop Shoulder Tshirt",
            oldPrice:750,
            newPrice:360
        },
        {
            img:"https://m.media-amazon.com/images/I/51tccxdB-NL._SY741_.jpg",
            Name:"Alan Jones Clothing Mens Cotton Track Suit",
            oldPrice:1500,
            newPrice:999
        },
    ]
    return (
        <div>
            <section>
                <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map(data => (
                        <div className='p-6 rounded-lg hover:shadow-lg transform translate-transform duration-300 hover:scale-105'>
                            <img src={data.img} alt="" className='rounded-lg mb-4 w-full h-48 object-cover'/>
                            <h3 className='text-2xl font-bold mb-2'>{data.Name}</h3>
                            <p className="text-center fs-5">Rs &nbsp;<del>{data.oldPrice}</del> {data.newPrice}</p>
                        </div>
                    ))}
                </div>
                </div>
            </section>
        </div>
    )
}

export default Hero