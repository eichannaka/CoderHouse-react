import { Grid } from '@nextui-org/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ProductCardHero from './components/ProductCardHero'
import ProductCardHeroDescrip from './components/ProductCardHeroDescrip'

export default function Product() {
    const params = useParams()
    const { id } = params
    return (
        <Root>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} sm={6}>
                    <ProductCardHero />

                </Grid>
                <Grid xs={12} sm={6}>
                    <ProductCardHeroDescrip id={id}/>

                </Grid>
            </Grid.Container>

        </Root>
    )
}

const Root = styled.div`
    background-color: red;
    width: 100%;
    height: 100%;
`
