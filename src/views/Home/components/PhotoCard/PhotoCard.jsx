import React from 'react'
import styled from 'styled-components'

export default function PhotoCard({ photo }) {
    return (
        <Container >
            <p> {photo.name} </p>
            <img src={photo.src.small} alt={photo.alt} />
        </Container>
    )
}

const Container = styled.div`
color: black;
    width: 200px;
    height: 250px;
    margin-bottom: 150px;
    display: flex;
    gap: .5rem;
    border-radius: .5rem;
    background-color: red;
    flex-direction: column;
   
`
