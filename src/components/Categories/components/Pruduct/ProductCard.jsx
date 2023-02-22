import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getProduct } from '../../../../services/getProduct'
import Loader from '../../../../views/Home/components/Loader/Loader';
import styled from 'styled-components'
import { Grid } from '@nextui-org/react';
import { Button } from "../Button/Button"
function ProductCard() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct(setProduct)
  }, [])
  if (product.length === 0) return <Loader />
return (
    <div>
      <GridStyle >
        {product !== null ? (
          product.map(product => (
            <CardStyle>
              <div key={product.id} >
                <h2>{product.title}</h2>
                <img src={product.image} alt="foto producto" width="200px" />
                <h4>Precio: ${product.price}</h4>
                <p> {product.description}</p>
                <Link state={product} to={`/product/${product.id}`} >
                  <Button></Button>
                </Link>
              </div>
            </CardStyle>
          )
          )) : ("no hay producto")}
      </GridStyle>
    </div>
  )
}

export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 15px;
    background-color: #a3a3ad;
    width: 300px;
    height: auto;
    margin: 10px;
    border:solid 5px black;
` 
const GridStyle = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
background-color: #616183;
`


export default ProductCard