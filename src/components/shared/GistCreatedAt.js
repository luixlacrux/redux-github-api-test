import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

const GistCreatedAt = ({ createdAt }) => (
  <Time>
    Created At {moment(createdAt).format("MM Do YY")}
  </Time>
)

GistCreatedAt.propTypes = {
  createdAt: PropTypes.string.isRequired,
}

const Time = styled.time`
  color: #777;
  font-size: 12px;
`

export default GistCreatedAt
