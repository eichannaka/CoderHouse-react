import {useEffect, useState}from 'react'; 
import Loader from '../../../views/Home/components/Loader/Loader';

function ItemCount() {
    const [product, setProduct] = useState([]);
    useEffect(() => {

      getProduct(setProduct)
    }, [])
    if (product.length === 0) return <Loader/>
  return (
      <div>
        <GridStyle >
          {product !== null ? (
            product.find(product => (
              <CardStyle>
                <div key={product.id} >
                  <h2>{product.title}</h2>
                  <img src={product.image} alt="foto producto" width="200px" />
                  <h4>Precio: ${product.price}</h4>
                  <p> {product.description}</p>
                  <Link to={`/product/${product.id}`}>
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

export default ItemCount