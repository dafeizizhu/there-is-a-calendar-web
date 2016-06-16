import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import CalendarDetail from '../../components/profile/CalendarDetail'

import { changeColor, fetchCalendarNew } from '../../actions/profile/CalendarNew'

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
  componentWillUpdate(nextProps) {
    const { loading, success } = nextProps.root.Profile.calendarNew
    const { pathname } = nextProps.routing.locationBeforeTransitions
    if (!loading && success && pathname != '/profile/calendar') {
      setTimeout(() => hashHistory.replace('/profile/calendar'), 1000)
    }
  }
  render() {
    return <CalendarDetail {...this.props.root.Profile.calendarNew}
      onBackClick={this.handleBackClick.bind(this)}
      onColorClick={this.handleColorClick.bind(this)}
      onSubmit={this.handleSubmit.bind(this)} />
  }
}

export default connect(state => state)(CalendarNewModule)
