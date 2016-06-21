import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import {
  beginCalendarEdit,
  changeColor,
  changeName,
  fetchCalendarEdit
} from '../../actions/profile/CalendarEdit'

import CalendarDetail from '../../components/profile/CalendarDetail'

class CalendarEditModule extends Component {
  handleBackClick() {
    hashHistory.goBack()
  }
  handleColorClick(c) {
    const { dispatch } = this.props
    const { color }  = this.props.root.Profile.calendarEdit
    if (color != c) {
      dispatch(changeColor(c))
    }
  }
  handleNameChange(name) {
    const { dispatch } = this.props
    dispatch(changeName(name))
  }
  handleSubmit(name, color, id) {
    const { dispatch } = this.props
    dispatch(fetchCalendarEdit(id, name, color))
  }
  render() {
    return <CalendarDetail {...this.props.root.Profile.calendarEdit} 
      onBackClick={this.handleBackClick.bind(this)}
      onColorClick={this.handleColorClick.bind(this)}
      onNameChange={this.handleNameChange.bind(this)} 
      onSubmit={this.handleSubmit.bind(this)} />
  }
}

export default connect(state => state)(CalendarEditModule)
