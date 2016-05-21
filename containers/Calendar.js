import React, { Component } from 'react'
import { connect } from 'react-redux'

import Calendar from '../components/Calendar'
import { setDate, setType } from '../actions/Calendar'

class CalendarContainer extends Component {
  handleTodayClick(type) {
    const { dispatch } = this.props
    switch (type) {
      case 'year':
        dispatch(setType('month'))
        break
    }
  }
  handleYearClick() {
    const { dispatch } = this.props
    dispatch(setType('year'))
  }
  render() {
    return (
      <div>
        <Calendar
          {...this.props}
          currentDate={new Date()}
          onTodayClick={this.handleTodayClick.bind(this)}
          onYearClick={this.handleYearClick.bind(this)}/>
      </div>
    )
  }
}

export default connect(state => state)(CalendarContainer)
