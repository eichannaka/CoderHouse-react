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
                        <Card>
                            <div key={index}>
                                <h2>{category}</h2>

                            </div>
                        </Card>
                    )
                }
                ))}
        </CategoryList>
    )
}

const CategoryList = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
    
`

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #616183;
margin: 15px;
width: 50%;
height: 200px;
border: solid 5px black;
`