import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getProduct } from '../../../../services/getProduct'
import Loader from '../../../../views/Home/components/Loader/Loader';
import styled from 'styled-components'
import { Grid } from '@nextui-org/react';
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
                <Link to={`/product/${product.id}`}>
                  <div key={product.id} className="Card">
                    <h2>{product.title}</h2>
                    <img src={product.image} alt="foto producto" width="200px" />
                    <h4>Precio: ${product.price}</h4>
                    <p> {product.description}</p>
                  </div>
                </Link>
              </CardStyle>
            )
            )) : ("no hay producto")}
        </GridStyle>

    </div>
  )
}

const CardStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 15px;
width: auto;
height: auto;
margin: 5px;
`
const GridStyle = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
background-color: #616183;
`


export default ProductCard