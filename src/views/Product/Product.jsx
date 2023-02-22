import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'
import ProductCardHero from './components/ProductCardHero'
import ProductCardHeroDescrip from './components/ProductCardHeroDescrip'
import ItemCount from '../../components/item/itemCount/ItemCount'
import "./productStyle.css"



export default function Product() {
    const params = useParams()
    const { state } = useLocation()
    const { id } = params
    console.log(state);
    function onAddToCart() {
        setCart(alert("Se agrego producto"))
    }
    return (
        <Root>
            <div className='productStyle'>
                <ProductCardHero />
                <div key={state.id} className="CardStyle">
                    <h2>{state.title}</h2>
                    <img src={state.image} alt="foto producto" width="200px" />
                    <h4>Precio: ${state.price}</h4>
                    <p> {state.description}</p>
                </div>
                <ItemCount></ItemCount>
            </div>
        </Root>
    )
}

const Root = styled.div`
    background-color: rgb(193, 193, 124);
    width: 100%;
    height: 100%;
`