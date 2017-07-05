import React, { Component } from 'react'

import { Navbar } from 'react-bootstrap'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <button className="btn btn-red">Zagraj</button>
                <h1>Navigation</h1>
                <ul>
                    <li>Inbox</li>
                    <li>Starred</li>
                    <li>Sent</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar

