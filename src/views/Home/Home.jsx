import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles/index.css'

// Components
import Loader from './components/Loader/Loader'

//Services
import { getPhotos } from '../../services/getPhotos'
import PhotoCard from './components/PhotoCard/PhotoCard'
import { Link } from 'react-router-dom'

export default function Home() {
	const [photosState, setPhotosState] = useState([])

	useEffect(() => {
		const response = getPhotos()

		response.then(res => {
			setPhotosState(res.data)
		})
			.catch(err => {
				console.log(err);
			})

	}, [])

	if (photosState.length === 0) return <Loader />

	return (
		<PhotosContainer >
			{
				photosState.photos.map((photo, index) => (
					<Link to={`/photo/${photo.id}`}  key={index} >
						<PhotoCard photo={photo}/>
					</Link>
				))
			}
		</PhotosContainer>
	)
}

const PhotosContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin: 40px;
`
