import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Calendar from '../components/Calendar'

import { setDate, setType } from '../actions/Calendar'
import { beginEventNew } from '../actions/profile/EventNew'

class CalendarModule extends Component {
  handleTodayClick(type) {
    const { dispatch } = this.props
    const { date } = this.props.root.Calendar
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
    const { dispatch } = this.props
    const { date } = this.props.root.Calendar
    dispatch(setDate(new Date(date.getFullYear() - 1, 0, 1)))
  }
  handleNextYearClick() {
    const { dispatch } = this.props
    const { date } = this.props.root.Calendar
    dispatch(setDate(new Date(date.getFullYear() + 1, 0, 1)))
  }
  handleMonthClick(key) {
    const { dispatch } = this.props
    const { date } = this.props.root.Calendar
    dispatch(setDate(new Date(date.getFullYear(), key, 1)))
    dispatch(setType('month'))
  }
  handlePrevMonthClick() {
    const { dispatch } = this.props
    const { date } = this.props.root.Calendar
    dispatch(setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1)))
  }
  handleNextMonthClick() {
    const { dispatch } = this.props
    const { date } = this.props.root.Calendar
    dispatch(setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1)))
  }
  handleDayClick(d) {
    const { dispatch } = this.props
    const { date } = this.props.root.Calendar
    dispatch(setDate(new Date(date.getFullYear(), date.getMonth(), d)))
    dispatch(setType('day'))
  }
  handleMyClick() {
    hashHistory.push('/profile')
  }
  handleCalendarClick() {
    hashHistory.push('/profile/calendar')
  }
  handleAddClick() {
    const { dispatch } = this.props
    const { result, entities } = this.props.root.Profile
    const calendar = entities.users[result].calendars[1]
    dispatch(beginEventNew(calendar))
    hashHistory.push('/profile/event/new')
  }
  render() {
    return (
      <div>
        <Calendar
          {...this.props.root.Calendar}
          currentDate={new Date()}
          onTodayClick={this.handleTodayClick.bind(this)}
          onYearClick={this.handleYearClick.bind(this)}
          onPrevYearClick={this.handlePrevYearClick.bind(this)}
          onNextYearClick={this.handleNextYearClick.bind(this)} 
          onMonthClick={this.handleMonthClick.bind(this)}
          onPrevMonthClick={this.handlePrevMonthClick.bind(this)}
          onNextMonthClick={this.handleNextMonthClick.bind(this)}
          onDayClick={this.handleDayClick.bind(this)}
          onMyClick={this.handleMyClick.bind(this)}
          onCalendarClick={this.handleCalendarClick.bind(this)} 
          onAddClick={this.handleAddClick.bind(this)} />
      </div>
    )
  }
}

export default connect(state => state)(CalendarModule)
