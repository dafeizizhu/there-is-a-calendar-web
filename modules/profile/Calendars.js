import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Calendars from '../../components/profile/Calendars'

class CalendarsModule extends Component {
  render() {
    return <Calendars /> 
  }
}

export default connect(state => state)(CalendarsModule)
