import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import CalendarDetail from '../../components/profile/CalendarDetail'

import {
  changeColor,
  changeName,
  fetchCalendarNew,
  resetCalendarNew,
} from '../../actions/profile/CalendarNew'

class CalendarNewModule extends Component {
  handleBackClick() {
    hashHistory.goBack()
  }
  handleColorClick(c) {
    const { dispatch } = this.props
    const { color }  = this.props.root.Profile.calendarNew
    if (color != c) {
      dispatch(changeColor(c))
    }
  }
  handleSubmit(n, c) {
    const { dispatch } = this.props
    dispatch(fetchCalendarNew(n, c))
  }
  handleNameChange(name) {
    const { dispatch } = this.props
    dispatch(changeName(name))
  }
  handleAlertOK() {
    const { dispatch } = this.props
    const { success } = this.props.root.Profile.calendarNew
    if (success) {
      hashHistory.goBack()
    } else {
      dispatch(resetCalendarNew())
    }
  }
  render() {
    return <CalendarDetail {...this.props.root.Profile.calendarNew}
      onBackClick={this.handleBackClick.bind(this)}
      onColorClick={this.handleColorClick.bind(this)}
      onSubmit={this.handleSubmit.bind(this)} 
      onNameChange={this.handleNameChange.bind(this)}
      onAlertOK={this.handleAlertOK.bind(this)} />
  }
}

export default connect(state => state)(CalendarNewModule)
