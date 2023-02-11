import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../../App'

export default function ProductCardHeroDescrip() {
  const { cart, setCart } = useContext(AppContext)
  const {id} = useParams()
  console.log("🚀 ~ file: ProductCardHeroDescrip.jsx:8 ~ ProductCardHeroDescrip ~ id", id)
  const handleAddCart = () => {
    console.log(cart);
    const cartIsEmpty = cart.items.length > 0

    const haveSomePreviousItem = cart.items.some(item => item.id === id)

    const itemPrevious = cart.items.findIndex(prod => prod.id === id)

    setCart(prevState =>
    ({
      ...prevState, empty: !cartIsEmpty,
      items: [...prevState.items, 
         {
          ...prevState.items[itemPrevious], quantity
            : haveSomePreviousItem ? prevState.items[itemPrevious].quantity + 1 : 1
        } ]
    }))
  }
//Como cambiar el estado de un array sumandole a los propiedades q ya tiene
  return (
    <div
      onClick={handleAddCart}
    >Agregar producto</div>
  )
}
