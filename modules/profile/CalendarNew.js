import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import CalendarDetail from '../../components/profile/CalendarDetail'

class CalendarNewModule extends Component {
  handleBackClick() {
    hashHistory.goBack()
  }
  render() {
    return <CalendarDetail 
      onBackClick={this.handleBackClick.bind(this)} />
  }
}

export default connect(state => state)(CalendarNewModule)
