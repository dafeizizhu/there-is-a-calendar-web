import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import CalendarDetail from '../../components/profile/CalendarDetail'

import { changeColor } from '../../actions/profile/CalendarNew'

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
  render() {
    return <CalendarDetail {...this.props.root.Profile.calendarNew}
      onBackClick={this.handleBackClick.bind(this)}
      onColorClick={this.handleColorClick.bind(this)} />
  }
}

export default connect(state => state)(CalendarNewModule)
