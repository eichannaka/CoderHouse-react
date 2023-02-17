import React, { useEffect, useState } from 'react'
import { getProduct } from '../../../../services/getProduct';
import styled from 'styled-components'
import { AppContext } from '../../../../App';
import Loader from '../../../../views/Home/components/Loader/Loader';
import "./ProductHombre.css"

function ProductHombre() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getProduct(setProduct)
    }, [])
    if (product.length === 0) return <Loader />
    return (
        <div>
            <Fondo>
                {product.map(product => {
                    if (product.category === "men's clothing") {
                        return <div key={product.id} className="Card">
                            <h2>{product.title}</h2>
                            <img src={product.image} alt="Foto Producto Hombre" width="200px" />
                            <h4>Precio: ${product.price}</h4>
                            <p> {product.description}</p>
                        </div>
                    }
                })}
            </Fondo>
        </div>
    )
}
const Fondo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
background-color: #616183;
`
export default ProductHombre