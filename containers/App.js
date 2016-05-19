import React, { Component } from 'react'
import { connect } from 'react-redux'
import Calendar from '../components/Calendar'

class App extends Component {
  render() {
    return (
      <div>
        <Calendar {...this.props} />
      </div>
    )
  }
}

export default connect(state => state)(App)
