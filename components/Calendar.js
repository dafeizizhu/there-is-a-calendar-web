import React, { Component, PropTypes } from 'react'

class Calendar extends Component {
  render() {
    return (
      <div>
        <p>Current Date is {this.props.currentDate.toString()}.</p>
      </div>
    )
  }
}

export default Calendar
