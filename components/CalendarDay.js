import React, { Component } from 'react'

class CalendarDay extends Component {
  render() {
    const { date, currentDate } = this.props
    return (
      <div>
        <div>date: {date.toString()}</div>
        <div>currentDate: {currentDate.toString()}</div>
      </div>
    )
  }
}

export default CalendarDay
