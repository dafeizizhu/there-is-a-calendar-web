import React, { Component } from 'react' 
import { connect } from 'react-redux'

import CalendarDetail from '../../components/profile/CalendarDetail'

class CalendarNewModule extends Component {
  render() {
    return <CalendarDetail />
  }
}

export default connect(state => state)(CalendarNewModule)
