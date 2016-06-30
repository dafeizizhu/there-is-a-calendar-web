import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import EventDetail from '../../components/profile/EventDetail'

import {
  changeTitle,
  changeLocation,
  changeBegin,
  changeEnd
} from '../../actions/profile/EventNew'

class EventNewModule extends Component {
  handleCalendarClick() {
    hashHistory.push('/profile/event/new/calendar')
  }
  handleTitleChange(title) {
    const { dispatch } = this.props
    dispatch(changeTitle(title))
  }
  handleLocationChange(location) {
    const { dispatch } = this.props
    dispatch(changeLocation(location))
  }
  handleBeginChange(begin) {
    const { dispatch } = this.props
    dispatch(changeBegin(begin))
  }
  handleEndChange(end) {
    const { dispatch } = this.props
    dispatch(changeEnd(end))
  }
  render() {
    const { entities, result } = this.props.root.Profile
    const user = entities.users[result]
    const calendarIds = user.calendars
    const calendars = entities.calendars
    return <EventDetail {...this.props.root.Profile.eventNew} calendars={calendars}
      onCalendarClick={this.handleCalendarClick.bind(this)} 
      onTitleChange={this.handleTitleChange.bind(this)}
      onLocationChange={this.handleLocationChange.bind(this)}
      onBeginChange={this.handleBeginChange.bind(this)}
      onEndChange={this.handleEndChange.bind(this)} />
  }
}

export default connect(state => state)(EventNewModule)
