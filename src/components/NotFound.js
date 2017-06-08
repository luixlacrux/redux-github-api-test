import React from 'react'
import styled from 'styled-components'

import Image404 from '../404.png'

const NotFound = () => (
  <Container>
    <img src={Image404}></img>
  </Container>
)

const Container = styled.div`
  max-width: 300px;
  border-radius: 0.2em;
  box-shadow: 0 10px 20px rgba(5,5,5, 0.2);
  padding: 1em;
  background: #24292E;
  margin: calc(50vh - 200px) auto;
  img {
    width: 70%;
    margin: 0 auto;
    display: block;
  }
`

export default NotFound
