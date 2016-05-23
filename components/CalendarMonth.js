import React, { Component } from 'react'
import moment from 'moment'

class CalendarMonth extends Component {
  render() {
    return (
      <div>
        <div>date: {moment(this.props.date).format('YYYY MM DD')}</div>
        <div>currentDate: {moment(this.props.currentDate).format('YYYY MM DD')}</div>
      </div>
    )
  }
}

export default CalendarMonth
