import React, { Component } from 'react'
import { connect } from 'react-redux'

import Calendar from '../components/Calendar'
import { setDate, setType } from '../actions/Calendar'

class CalendarContainer extends Component {
  handleTodayClick(type) {
    const { date, dispatch } = this.props
    dispatch(setDate(new Date()))
    switch (type) {
      case 'year':
        if (new Date().getFullYear() == date.getFullYear()) {
          dispatch(setType('month'))
        }
        break
    }
  }
  handleYearClick() {
    const { dispatch } = this.props
    dispatch(setType('year'))
  }
  handlePrevYearClick() {
    const { date, dispatch } = this.props
    dispatch(setDate(new Date(date.getFullYear() - 1, 0, 1)))
  }
  handleNextYearClick() {
    const { date, dispatch } = this.props
    dispatch(setDate(new Date(date.getFullYear() + 1, 0, 1)))
  }
  handleMonthClick(key) {
    const { date, dispatch } = this.props
    dispatch(setDate(new Date(date.getFullYear(), key, 1)))
    dispatch(setType('month'))
  }
  handlePrevMonthClick() {
    const { date, dispatch } = this.props
    dispatch(setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1)))
  }
  handleNextMonthClick() {
    const { date, dispatch } = this.props
    dispatch(setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1)))
  }
  render() {
    return (
      <div>
        <Calendar
          {...this.props}
          currentDate={new Date()}
          onTodayClick={this.handleTodayClick.bind(this)}
          onYearClick={this.handleYearClick.bind(this)}
          onPrevYearClick={this.handlePrevYearClick.bind(this)}
          onNextYearClick={this.handleNextYearClick.bind(this)} 
          onMonthClick={this.handleMonthClick.bind(this)}
          onPrevMonthClick={this.handlePrevMonthClick.bind(this)}
          onNextMonthClick={this.handleNextMonthClick.bind(this)} />
      </div>
    )
  }
}

export default connect(state => state)(CalendarContainer)
