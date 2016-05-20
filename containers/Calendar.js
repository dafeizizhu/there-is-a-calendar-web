import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRoute, ROUTES } from '../actions/Calendar'

import Calendar from '../components/Calendar'

class CalendarContainer extends Component {
  render() {
    return <Calendar {...this.props} />
  }
}

export default connect(state => state)(CalendarContainer)
