import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Calendar from '../../components/profile/Calendar'

import { beginCalendarNew } from '../../actions/profile/CalendarNew'
import { beginCalendarEdit } from '../../actions/profile/CalendarEdit'
import { fetchRemoveCalendar } from '../../actions/profile/Calendar'

class CalendarModule extends Component {
  handleAddClick() {
    const { dispatch } = this.props
    dispatch(beginCalendarNew())
    hashHistory.push('/profile/calendar/new')
  }
  handleBackClick() {
    hashHistory.goBack()
  }
  handleEditClick(key) {
    const { dispatch } = this.props
    const { calendars } = this.props.root.Profile.entities
    dispatch(beginCalendarEdit(calendars[key]))
    hashHistory.push({
      pathname: '/profile/calendar/edit'
    })
  }
  handleRemoveClick(key) {
    const { dispatch } = this.props
    dispatch(fetchRemoveCalendar(key))
  }
  render() {
    return <Calendar {...this.props.root.Profile} 
      onAddClick={this.handleAddClick.bind(this)} 
      onBackClick={this.handleBackClick.bind(this)} 
      onEditClick={this.handleEditClick.bind(this)}
      onRemoveClick={this.handleRemoveClick.bind(this)} /> 
  }
}

export default connect(state => state)(CalendarModule)
