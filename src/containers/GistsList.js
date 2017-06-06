import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchGists } from '../actions'

import Pagination from '../components/Pagination'

class GistsList extends Component {
  constructor (props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  componentDidMount () {
    this.props.fetchData()
  }

  prevPage (e) {
    const { url } = this.props.linkPages.prev
    this.props.fetchData(url)
  }

  nextPage (e) {
    const { url } = this.props.linkPages.next
    this.props.fetchData(url)
  }

  render () {
    const { linkPages, gists, isFetching } = this.props
    return (
      <div>
        {isFetching &&
          <h4>Loading...</h4>
        }
        <ul>
          {!isFetching && gists.length > 0 && gists.map(gist => (
            <li key={gist.id}>
              <Link to={`/gists/${gist.id}`}>
                {gist.description}
              </Link>
            </li>
          ))}
        </ul>
        <Pagination
          onNext={this.nextPage}
          onBack={this.prevPage}
          linkPages={linkPages}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {
    list: gists,
    linkPages,
    isFetching
  } = state.gists || {
    isFetching: true,
    items: [],
  }

  return {
    gists,
    linkPages,
    isFetching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url) => {
      dispatch(fetchGists(url))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GistsList)
