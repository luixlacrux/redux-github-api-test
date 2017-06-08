import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import fileIcons from 'file-icons-js'
import 'file-icons-js/css/style.css'

import GistBottomInfo from './shared/GistBottomInfo'

const GistInfo = ({ gist }) => {
  const files = Object.keys(gist.files).map(i => gist.files[i])

  return (
    <section>
      <Title>
        <Link to="/" className="light">Gists</Link>
        <span className="divider"> / </span>
        <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
          {gist.description || 'Untitled'}
        </a>
      </Title>
      <GistBottomInfo owner={gist.owner} createdAt={gist.created_at}/>
      <h4>Files:</h4>
      <FileList length={files.length}>
        {files.map((file, i) =>
          <li key={i}>
            <a href={file.raw_url} target="_blank" rel="noopener noreferrer">
              <i className={`icon ${fileIcons.getClassWithColor(file.filename)}`}></i>
              {file.filename}
            </a>
          </li>
        )}
      </FileList>
    </section>
  )
}

GistInfo.propTypes = {
  gist: PropTypes.shape({
    html_url: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    description: PropTypes.string,
    owner: PropTypes.object,
    files: PropTypes.object,
  })
}

const Title = styled.h1`
  font-size: 20px;
  .light {
    font-weight: normal;
  }
  .divider {
    color: #777;
    font-size: 16px;
  }
`
const FileList = styled.ul`
  list-style: none;
  column-count: ${props => props.length > 4 ? 2 : 1};
  padding: 0;
  li {
    width: 100%;
    display: inline-block;
    padding: 10px 0;
    line-height: 10px;
  }
  .icon {
    padding: 0 0.5em;
    &:before {
      font-size: 20px;
    }
  }
`

export default GistInfo
