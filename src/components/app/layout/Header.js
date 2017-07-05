import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
          <nav className="top-bar">
              <div className="logo">
                  <h1>Gampre</h1>
              </div>
              <div className="user-info">
                  <div className="avatar">
                      <img src={'https://gampre.pl/assets/img/users/szef0.png'}/>
                  </div>
                  <div className="name">
                      szef0,
                      <span className="premium"> Premium</span>
                  </div>
              </div>
          </nav>
      </header>
    )
  }
}

export default Header
