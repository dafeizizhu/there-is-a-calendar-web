import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import EventDetail from '../../components/profile/EventDetail'

class EventNewModule extends Component {
  render() {
    return <EventDetail />
  }
}

export default connect(state => state)(EventNewModule)
