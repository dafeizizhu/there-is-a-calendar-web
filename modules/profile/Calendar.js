import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Calendar from '../../components/profile/Calendar'

class CalendarModule extends Component {
  render() {
    return <Calendar {...this.props.root.Profile} /> 
  }
}

export default connect(state => state)(CalendarModule)
