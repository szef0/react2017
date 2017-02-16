import React, { Component } from 'react'

import Navigation from './Navigation'

class Header extends Component {
  render() {
    return (
      <header className='container'>
        <Navigation brand={this.props.brand} />
      </header>
    )
  }
}

export default Header

