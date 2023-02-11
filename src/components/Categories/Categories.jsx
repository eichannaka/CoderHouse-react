import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { getProduct } from '../../services/getProduct';
import useAxios from '../../utils/useAxios';
import Loader from '../../views/Home/components/Loader/Loader';



export default function Categories() {
    const [category, setCategory] = useState([]);

    const { response, error, loading } = useAxios({
        method: 'get',
        url: '/products/categories',
    })

    useEffect(() => {
        if (response !== null) {
            setCategory(response)
        }
    }, [response])


    if (loading) return <Loader />

    return (
        <CategoryList>
            {(
                category.map((category, index) => {
                    return (
                        <div key={index}>
                            <h2>{category}</h2>
                        </div>
                    )
                }
                ))}
        </CategoryList>
    )
}

const CategoryList = styled.div`

    
`
