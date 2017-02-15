import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/app/App'
import HelloWorld from './components/hello-world/Hello-World'

import './index.css'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HelloWorld} />
    </Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
)

