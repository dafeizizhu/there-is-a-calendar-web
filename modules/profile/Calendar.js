import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Calendar from '../../components/profile/Calendar'

class CalendarModule extends Component {
  handleAddClick() {
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
