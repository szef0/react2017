import React, { Component } from 'react'

import Header from './layout/Header'
import Footer from './layout/Footer'
import Sidebar from './layout/Sidebar'

class App extends Component {
  render() {
    return (
      <div className='gampre-play-wrapper'>
        <Header />
          <div className='main'>
              <Sidebar />
              {this.props.children}
          </div>
        <Footer />
      </div>
    )
  }
}

export default App

