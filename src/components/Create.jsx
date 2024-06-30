import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/Context';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const navigate = useNavigate();

    const [products, setproducts] = useContext(ProductContext);
    const [title, settitle] = useState("");
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const newProduct = {
            id: nanoid(),
            title:title.trim(),
            image,
            category: category.trim(),
            price: price.trim(),
            description: description.trim()
        };
        setproducts([...products, newProduct]);
        localStorage.setItem("products", JSON.stringify([...products, newProduct]));
        toast.success("New Product Added!");
        navigate("/");
    };


    return (
        <form onSubmit={submitHandler} className='w-full h-screen p-16 flex flex-col items-center gap-6'>
            <h1 className='text-3xl font-medium'>Add New Product</h1>
            <input onChange={(e) => settitle(e.target.value)} className='w-1/2 py-2 px-4 rounded bg-zinc-100' type="text" placeholder='Enter Product Title' value={title} required />
            <input onChange={(e) => setimage(e.target.value)} className='w-1/2 py-2 px-4 rounded bg-zinc-100' type="url" placeholder='Enter Product Image URL' value={image} required />
            <div className='w-1/2 flex gap-4'>
                <input onChange={(e) => setcategory(e.target.value)} className='w-1/2 py-2 px-4 rounded bg-zinc-100' type="text" placeholder='Enter Product Category' value={category} required />
                <input onChange={(e) => setprice(e.target.value)} className='w-1/2 py-2 px-4 rounded bg-zinc-100' type="number" placeholder='Enter Product Price' value={price} required />
            </div>
            <textarea onChange={(e) => setdescription(e.target.value)} className='w-1/2 resize-none py-4 px-4 rounded bg-zinc-100' type="text" rows="10" placeholder='Enter Product Description' value={description} required></textarea>
            <button className='px-4 py-2 border rounded border-blue-200 text-blue-400'>Add Product</button>
        </form>
    )
}

export default Create