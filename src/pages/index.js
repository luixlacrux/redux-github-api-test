import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'
import NotFound from '../components/NotFound'
import GistsList from '../containers/GistsList'
import GistsDetail from '../containers/GistsDetail'

const Pages = () => (
  <main>
    <Header />
    <App>
      <Switch>
        <Route exact path="/" component={GistsList} />
        <Route exact path="/gists/:id" component={GistsDetail} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </main>
)

const App = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 70px;
  padding-bottom: 16px;
`

export default Pages
