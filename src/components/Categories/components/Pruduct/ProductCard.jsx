import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getProduct } from '../../../../services/getProduct'
import Loader from '../../../../views/Home/components/Loader/Loader';


function ProductCard() {
  const [product, setProduct] = useState([]);
  useEffect(() => {

    getProduct(setProduct)

  }, [])
  if (product.length === 0) return <Loader />
  return (
    <div>
      {product !== null ? (
        product.map(product => (
          <Link to={`/product/${product.id}`}>
            <div key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.image} alt="foto producto" width="200px" />
              <h4>Precio: ${product.price}</h4>
              <p> ${product.description}</p>
            </div>
          </Link>
        )
        )) : ("no hay producto")}
    </div>
  )
}

export default ProductCard