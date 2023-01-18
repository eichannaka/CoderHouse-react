import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getPhotos } from '../../services/getPhotos'
import PhotoCard from '../Home/components/PhotoCard/PhotoCard'

export default function Photo() {
    const [photoState, setPhotoState] = useState({})
    const { id = null } = useParams()

    useEffect(() => {
        const response = getPhotos(id)

        response.then(res => {
            setPhotoState(res.data)
        })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(Object.values(photoState).length);
    if (Object.values(photoState).length === 0) return <p>...cargando</p>

    return (
        <Container>
            <PhotoCard photo={photoState} />
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: red;
`