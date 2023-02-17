import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../../App'
import styled from 'styled-components'

export default function ProductCardHeroDescrip() {
  const { cart, setCart } = useContext(AppContext)
  const { id } = useParams()
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
      }]
    }))
  }
  //Como cambiar el estado de un array sumandole a los propiedades q ya tiene
  return (
    <Descrip>
      <div
        onClick={handleAddCart}
      >Agregar producto</div>
    </Descrip>
  )
}
const Descrip = styled.div`
    background-color: #23707e;
    color: black;
    padding: 5px;
    border-radius: 10%;
    border: solid 2px black;
`