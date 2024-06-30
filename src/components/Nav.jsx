import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/Context'
import { Link } from 'react-router-dom';
import axios from '../context/axios';

const Nav = () => {

  const [products] = useContext(ProductContext);
  // const [Category, setCategory] = useState(null)

  let category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  category = [...new Set(category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()},0.4)`
  }

  return (

    <nav className='w-1/5 h-full bg-zinc-100 flex flex-col items-center py-5'>
      <Link to="/create" className='px-4 py-2 border rounded border-blue-200 text-blue-400' href="">Add New Porduct</Link>
      <hr className='w-52 mt-5' />
      <h1 className='text-2xl w-52 mb-2 font-medium'>Category</h1>
      <div className='w-52'>
        {category ? (
          category.map((c, i) => <Link to={`/?category=${c}`} key={i} className='mb-2 flex items-center'><span style={{ backgroundColor: color() }} className='w-4 h-4 mr-2 rounded-full'></span>{c}</Link>)
        ) : (
          <h1>Loading</h1>
        )
        }
      </div>
    </nav>
  )
}

export default Nav