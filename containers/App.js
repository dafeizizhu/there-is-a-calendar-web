import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>I am the app</div>
    )
  }
}

export default connect((state) => state)(App)
