import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../context/Context';
import { toast } from 'react-toastify';

const Edit = () => {

    const [products, setproducts] = useContext(ProductContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setproduct] = useState({
        title: "",
        image: "",
        category: "",
        price: "",
        description: ""
    });

    const ChangeHandler = (e) => {
        setproduct({ ...product, [e.target.name]: e.target.value });
    }


    useEffect(() => {
        const productToEdit = products.find((p) => p.id == id);
        if (productToEdit) {
            setproduct(productToEdit);
        }
    }, [id, products]);


    const editHandler = (e) => {
        e.preventDefault();

        const copyProducts = [...products]
        const productIndex = products.findIndex((p) => p.id == id);
        copyProducts[productIndex] = {...products[productIndex], ...product}
        setproducts(copyProducts);
        localStorage.setItem("products", JSON.stringify(copyProducts));
        toast.success("Product Updated Successfully!");
        navigate(-1);
    };

    return (
        <form onSubmit={editHandler} className='w-full h-screen p-16 flex flex-col items-center gap-6'>
            <h1 className='text-3xl font-medium'>Edit Your Product</h1>
            <input name="title" onChange={ChangeHandler} className='w-1/2 py-2 px-4 rounded bg-zinc-100' type="text" placeholder='Enter Product Title' value={product && product.title} required />
            <input name="image" onChange={ChangeHandler} className='w-1/2 py-2 px-4 rounded bg-zinc-100' type="url" placeholder='Enter Product Image URL' value={product && product.image} required />
            <div className='w-1/2 flex gap-4'>
                <input name="category" onChange={ChangeHandler} className='w-1/2 py-2 px-4 rounded bg-zinc-100' type="text" placeholder='Enter Product Category' value={product && product.category} required />
                <input name="price" onChange={ChangeHandler} className='w-1/2 py-2 px-4 rounded bg-zinc-100' type="number" placeholder='Enter Product Price' value={product && product.price} required />
            </div>
            <textarea name="description" onChange={ChangeHandler} className='w-1/2 resize-none py-4 px-4 rounded bg-zinc-100' type="text" rows="10" placeholder='Enter Product Description' value={product && product.description} required></textarea>
            <button className='px-4 py-2 border rounded border-blue-200 text-blue-400'>Update Product</button>
        </form>
    )
}

export default Edit