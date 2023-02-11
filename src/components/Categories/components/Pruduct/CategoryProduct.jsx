import React from 'react';
import { useEffect, useState } from 'react'
import Loader from '../../../../views/Home/components/Loader/Loader';
import { getProduct } from '../../../../services/getProduct';

function CategoryProduct() {
    const [category, setCategory] = useState([]);
    useEffect(() => {

        getProduct(setCategory)

    }, [])
    if (category.length === 0) return <Loader />
    return (
        <div className=' '>
            {category !== null ? (
                category.map(category => { 
                    // console.log("🚀 ~ file: CategoryProduct.jsx:18 ~ CategoryProduct ~ category", category)
                    
                    return (
                    <div key={category.id}>
                        <h2>{category.category}</h2>
                        <h4>Hay ${category.items} productos</h4>
                    </div>
                )}
                )) : ("no hay producto")}
        </div>
    )
}

export default CategoryProduct