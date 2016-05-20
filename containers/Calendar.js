import React, { Component } from 'react'
import { connect } from 'react-redux'

import Calendar from '../components/Calendar'
import { setDate } from '../actions/Calendar'

class CalendarContainer extends Component {
  handleButtonNextClick() {
    const { dispatch } = this.props
    dispatch(setDate(new Date(this.props.date.getFullYear() + 1, 0, 1)))
  }
  handleButtonPrevClick() {
    const { dispatch } = this.props
    dispatch(setDate(new Date(this.props.date.getFullYear() - 1, 0, 1)))
  }
  render() {
    return (
      <div>
        <Calendar {...this.props} currentDate={new Date()}/>
        <p>
          <button onClick={this.handleButtonPrevClick.bind(this)}>上一年</button>
          <button onClick={this.handleButtonNextClick.bind(this)}>下一年</button>
        </p>
      </div>
    )
  }
}

export default connect(state => state)(CalendarContainer)
