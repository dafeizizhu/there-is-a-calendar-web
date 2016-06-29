import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import EventDetail from '../../components/profile/EventDetail'

class EventNewModule extends Component {
  constructor({ location }) {
    super()
    this.path = location.pathname
  }
  handleCalendarClick() {
    const { calendar } = this.props.root.Profile.eventNew
    hashHistory.push('/profile/event/new/calendar?path=' + this.path + '&calendar=' + calendar)
  }
  render() {
    const { entities, result } = this.props.root.Profile
    const user = entities.users[result]
    const calendarIds = user.calendars
    const calendars = entities.calendars
    return <EventDetail {...this.props.root.Profile.eventNew} calendars={calendars}
      onCalendarClick={this.handleCalendarClick.bind(this)} />
  }
}

export default connect(state => state)(EventNewModule)
