import React, { Component } from 'react'

class CalendarPicker extends Component {
  render() {
    const { calendar, calendars } = this.props
    return (
      <div>
        <div>current calendar { calendar }</div>
        <div>{ JSON.stringify(calendars) }</div>
      </div>
    )
  }
}

export default CalendarPicker
