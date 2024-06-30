import React from 'react'
import { Link } from 'react-router-dom'

const Cards = (props) => {
    const { id, image, title, price} = props.products;
    return (
        <Link to={`/details/${id}`} className='w-fit h-fit'>
            <div className='card w-52 h-[21vw] pt-4 border shadow rounded flex items-center flex-col transition-all hover:scale-105'>
                <div className='w-full h-2/3 mb-4'>
                    <img className='w-full h-full object-contain' src={image} alt="" />
                </div>
                <h1 className='text-center'>{title.slice(0, 20)}...</h1>
                <h2>₹{price}</h2>
            </div>
        </Link>
    )
}

export default Cards