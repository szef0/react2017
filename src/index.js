import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './app/App'
import Home from './Home'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/home' component={Home} />
    </Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
)
