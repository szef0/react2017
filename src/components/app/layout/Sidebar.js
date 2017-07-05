import React, { Component } from 'react'

import { Link } from 'react-router'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <Link to={`/`}><button className="btn btn-red">Zagraj</button></Link>
                <h1>Menu</h1>
                <ul>
                    <li><Link to={`/statystyki`} activeClassName="active">Statystyki</Link></li>
                    <li><Link to={`/ranking`} activeClassName="active">Ranking</Link></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar

