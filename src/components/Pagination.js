import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Pagination = ({ onBack, onNext, linkPages = {} }) => (
  <Footer>
    <Button onClick={onBack} disabled={!linkPages.prev}>Back</Button>
    <Button onClick={onNext} disabled={!linkPages.next}>Next</Button>
  </Footer>
)

Pagination.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  linkPages: PropTypes.object,
}

const Footer = styled.footer`
  display: flex;
  height: 40px;
`
const Button = styled.button`
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  background-color: #E7ECF2;
  border: none;
  text-align: center;
  vertical-align: middle;
  &:first-child {
    border-right: 2px #ccc solid;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export default Pagination
