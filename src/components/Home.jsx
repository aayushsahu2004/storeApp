import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from "../context/Context";
import Loading from "./Loading"
import Cards from './Cards';
import axios from '../context/axios';

const Home = () => {
    const [products] = useContext(ProductContext);
    const { search } = useLocation();
    const category = decodeURIComponent(search.split("=")[1]);
    const [fiteredProducts, setfiteredProducts] = useState(null);

    // const getProductCategory = async () => {
    //     try {
    //         const { data } = await axios.get(`products/category/${category}`)
    //         setfiteredProducts(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        if (!fiteredProducts || category == "undefined") setfiteredProducts(products);
        if (category != "undefined") {
            // getProductCategory();
            setfiteredProducts(products.filter((p => p.category == category)));
        }
    }, [category, products]);


    return (products ?
        <div className='h-screen w-full flex items-center justify-between'>
            <Nav />
            <div className='h-full w-4/5 pt-20 pb-10 px-10 flex flex-wrap gap-8 overflow-auto'>
                {fiteredProducts && fiteredProducts.map((p, i) => <Cards key={p.id} products={p} />)}
            </div>
        </div>
        : <Loading />
    )
}

export default Home