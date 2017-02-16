import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'

import './app.css'

var host = window.location.hostname

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      brand: host
    }
  }

  render() {
    return (
      <div className='App'>
        <Header brand={this.state.brand} />
          <div className='container'>
            {this.props.children}
          </div>
        <Footer />
      </div>
    )
  }
}

export default App

