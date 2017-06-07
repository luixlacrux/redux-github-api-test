import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <Wrapper>
    <h1>Github<span>Gist</span></h1>
  </Wrapper>
)

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #24292E;
  color: white;
  padding: 1em;
  h1 {
    margin: 0 auto;
    max-width: 1000px;
  }
  span {
    font-weight: lighter;
  }
`

export default Header
