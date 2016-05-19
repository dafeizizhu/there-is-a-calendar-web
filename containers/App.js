import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRoute, ROUTES } from '../actions'
import Calendar from '../components/Calendar'
import Splash from '../components/Splash'

const { CALENDAR, SPLASH } = ROUTES

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(setRoute(CALENDAR))
    }, 5000)
  }
  render() {
    switch (this.props.route) {
      case CALENDAR:
        return <Calendar {...this.props} />
      case SPLASH:
        return <Splash />
      default:
        return <div>No route!</div>
    }
  }
}

export default connect(state => state)(App)
