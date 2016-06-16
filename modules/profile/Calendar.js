import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Calendar from '../../components/profile/Calendar'

import { beginCalendarNew } from '../../actions/profile/CalendarNew'

class CalendarModule extends Component {
  handleAddClick() {
    const { dispatch } = this.props
    dispatch(beginCalendarNew())
    hashHistory.push('/profile/calendar/new')
  }
  handleBackClick() {
    hashHistory.goBack()
  }
  render() {
    return <Calendar {...this.props.root.Profile} 
      onAddClick={this.handleAddClick.bind(this)} 
      onBackClick={this.handleBackClick.bind(this)} /> 
  }
}

export default connect(state => state)(CalendarModule)
