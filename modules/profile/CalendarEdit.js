import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import {
  beginCalendarEdit,
  changeColor,
  changeName,
  fetchCalendarEdit,
  resetCalendarEdit
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
  handleAlertOK() {
    const { dispatch } = this.props
    const { success } = this.props.root.Profile.calendarEdit
    if (success) {
      hashHistory.goBack()
    } else {
      dispatch(resetCalendarEdit())
    }
  }
  render() {
    return <CalendarDetail {...this.props.root.Profile.calendarEdit} 
      onBackClick={this.handleBackClick.bind(this)}
      onColorClick={this.handleColorClick.bind(this)}
      onNameChange={this.handleNameChange.bind(this)} 
      onSubmit={this.handleSubmit.bind(this)}
      onAlertOK={this.handleAlertOK.bind(this)} />
  }
}

export default connect(state => state)(CalendarEditModule)
