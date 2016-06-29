import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import CalendarPicker from '../../components/common/CalendarPicker'

class CalendarPickerModule extends Component {
  constructor({ location }) {
    super()
    this.callbackPath = location.query.path
    this.calendar = location.query.calendar
  }
  render() {
    const { result, entities } = this.props.root.Profile
    const user = entities.users[result]
    const calendarIds = user.calendars
    const calendars = entities.calendars
    return <CalendarPicker calendar={this.calendar} calendarIds={calendarIds} calendars={calendars} />
  }
}

export default connect(state => state)(CalendarPickerModule)
