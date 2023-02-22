import React, { useContext, useEffect, useState } from 'react'

// Components
import Loader from './components/Loader/Loader'

//Services
import { getProduct } from '../../services/getProduct'
import { Cart } from '../../components/Cart/Cart'
import { Link } from 'react-router-dom'
import Catergories from '../../components/Categories/Categories'
import { Card } from '@nextui-org/react'
import ProductCard from '../../components/Categories/components/Pruduct/ProductCard'
import { AppContext } from '../../App'

export default function Home() {
	const asdf = useContext(AppContext)
	console.log("🚀 ~ file: Home.jsx:24 ~ Home ~ asdf", asdf)
	// Condicionales para mostrar componentes

	return (
		<>
			<ProductCard></ProductCard>
		</>
	)
}


