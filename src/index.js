import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './app/App'
import HelloWorld from './helloworld/HelloWorld'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute path='/hello' component={HelloWorld} />
    </Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
)
