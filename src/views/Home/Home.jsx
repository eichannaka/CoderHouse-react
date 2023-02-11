import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles/index.css'

// Components
import Loader from './components/Loader/Loader'

//Services
import { getPhotos } from '../../services/getPhotos'
import { getCategories } from '../../services/getCategories'
import { getProduct } from '../../services/getProduct'
import { Cart } from '../../components/Cart/Cart'

import PhotoCard from './components/PhotoCard/PhotoCard'
import { Link } from 'react-router-dom'
import Catergories from '../../components/Categories/Categories'
import { Card } from '@nextui-org/react'
import ProductCard from '../../components/Categories/components/Pruduct/ProductCard'

export default function Home() {


	// Condicionales para mostrar componentes

	return (
		<>

			<PhotosContainer >
				<ProductCard></ProductCard> 
			</PhotosContainer>
		</>
	)



}


const PhotosContainer = styled.div`
display: flex;
flex-direction:row ;
justify-content: center;
align-items: center;
background-color: red;
border-radius: solid 5px black;
`
