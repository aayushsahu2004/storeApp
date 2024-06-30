import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from "../context/Context";
import Loading from './Loading';
import { toast } from 'react-toastify';

const Details = () => {
  const [products, setproducts] = useContext(ProductContext)
  const [product, setproduct] = useState(null)
  const { id } = useParams();
  const navigate = useNavigate();



  useEffect(() => {
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
  }, [product]);

  const ProductDeleteHandler = () => {
    setproducts(products.filter(p => p.id != id));
    localStorage.setItem("products", JSON.stringify(products.filter(p => p.id != id)));
    toast.success("Product Deleted Successfully!");
    navigate(-1);
  }
  return (
    product ?
      <div className='w-4/5 h-screen m-auto p-20 flex items-center'>
        <img className='w-72 object-cover' src={product.image} alt="" />
        <div className='content mt-14 mx-8 '>
          <h1 className='text-4xl mb-1 font-medium'>{product.title}</h1>
          <h3 className='mb-1 text-lg text-zinc-500'>{product.category}</h3>
          <h2 className='text-xl font-medium mb-1'>₹{product.price}</h2>
          <p className='mb-6'>{product.description}</p>
          <Link to={`/edit/${product.id}`} className='px-4 py-2 mr-6 border rounded border-blue-200 text-blue-400'>Edit</Link>
          <button onClick={ProductDeleteHandler} className='px-4 py-2 border rounded border-red-200 text-red-400'>Delete</button>
        </div>
      </div>
      : <Loading />
  )
}

export default Details