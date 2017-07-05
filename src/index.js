import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Stats from './components/stats/Stats'
import Rank from './components/rank/Rank'

import App from './components/app/App'
import Main from './components/main/Main'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
        <IndexRoute component={Main} />
        <Route path='/statystyki' component={Stats}/>
        <Route path='/ranking' component={Rank}/>
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);

