// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import UsersList from './components/UsersList'

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={UsersList} />
  </div>
)
