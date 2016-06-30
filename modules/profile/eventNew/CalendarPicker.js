import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import CalendarPicker from '../../../components/common/CalendarPicker'

import { changeCalendar } from '../../../actions/profile/eventNew/CalendarPicker'

class CalendarPickerModule extends Component {
  handleLabelClick(calendarId) {
    const { dispatch } = this.props
    dispatch(changeCalendar(calendarId))
  }
  handleBackClick() {
    hashHistory.goBack()
  }
  render() {
    const { result, entities } = this.props.root.Profile
    const user = entities.users[result]
    const calendarIds = user.calendars
    const calendars = entities.calendars
    const { calendar } = this.props.root.Profile.eventNew
    return <CalendarPicker calendar={calendar} calendarIds={calendarIds} calendars={calendars} 
      onLabelClick={this.handleLabelClick.bind(this)}
      onBackClick={this.handleBackClick.bind(this)} />
  }
}

export default connect(state => state)(CalendarPickerModule)
