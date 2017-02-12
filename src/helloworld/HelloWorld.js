import React, { Component } from 'react'
import { Jumbotron, Alert, Table } from 'react-bootstrap'

import pkg from '../../package.json'

class HelloWorld extends Component {
  render() {
    const dependencies = Object.keys(pkg.dependencies).map((dep, index) => {
      return (
        <tr>
          <td>{dep}</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      )
    })
    return (
      <div>
        <Jumbotron>
          <strong>Welcome!</strong> Have fun creating a new React application.
        </Jumbotron>
        <Table responsive>
          <thead>
            <tr>
              <th>Dependency</th>
              <th>GitHub Stars</th>
              <th>npm Downloads</th>
            </tr>
          </thead>
          <tbody>
            {dependencies}
          </tbody>
        </Table>
        <Alert bsStyle='info'>
          <a href='https://github.com/fostertheweb/react-boilerplate/blob/master/README.md'>ReadMe</a>
        </Alert>
      </div>
    )
  }
}

export default HelloWorld

