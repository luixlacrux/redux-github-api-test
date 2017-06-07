import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nprogress from 'nprogress'
import { connect } from 'react-redux'
import { fetchGists } from '../actions'

import Pagination from '../components/Pagination'
import Gists from '../components/Gists'

class GistsList extends Component {
  constructor (props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  componentDidMount () {
    this.props.fetchData()
  }

  componentWillUpdate (nextProps) {
    nextProps.isFetching ? Nprogress.start() : Nprogress.done()
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
      <div style={{ opacity: isFetching ? 0.5 : 1 }}>
        {isFetching && !gists.length &&
          <h4>Loading...</h4>
        }

        <Gists gists={gists} />

        <Pagination
          onNext={this.nextPage}
          onBack={this.prevPage}
          linkPages={linkPages}
        />
      </div>
    )
  }
}

GistsList.propTypes = {
  gists: PropTypes.array,
  linkPages: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
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
