import React, { Component } from 'react'

import { Navbar } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React BP</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    )
  }
}

export default Navigation

