import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import CalendarYear from './CalendarYear'
import CalendarMonth from './CalendarMonth'
import CalendarDay from './CalendarDay'

class Calendar extends Component {
  handleTodayClick() {
    const { onTodayClick, type } = this.props
    if (onTodayClick) onTodayClick(type)
  }
  handleYearClick() {
    const { onYearClick } = this.props
    if (onYearClick) onYearClick()
  }
  handleMonthClick() {
    const { onMonthClick, date } = this.props
    if (onMonthClick) onMonthClick(date.getMonth())
  }
  handleMyClick() {
    const { onMyClick } = this.props
    if (onMyClick) onMyClick()
  }
  handleCalendarClick() {
    const { onCalendarClick } = this.props
    if (onCalendarClick) onCalendarClick()
  }
  render() {
    const { date, currentDate, style, type } = this.props
    let c = (<div>No match type[{type}]!</div>),
        y = ''
    switch (type) {
      case 'year':
        c = <CalendarYear date={date} currentDate={currentDate}
          onTodayClick={this.props.onTodayClick}
          onMonthClick={this.props.onMonthClick}
          onPrevYearClick={this.props.onPrevYearClick} 
          onNextYearClick={this.props.onNextYearClick} /> 
        break
      case 'month':
        c = <CalendarMonth date={date} currentDate={currentDate} 
          onPrevMonthClick={this.props.onPrevMonthClick}
          onNextMonthClick={this.props.onNextMonthClick}
          onDayClick={this.props.onDayClick} /> 
        y = <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}><a onClick={this.handleYearClick.bind(this)}>{date.getFullYear()}年</a></li>
        break
      case 'day':
        c = <CalendarDay date={date} currentDate={currentDate} 
          onDayClick={this.props.onDayClick} />
        y = <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}><a onClick={this.handleMonthClick.bind(this)}>{date.getMonth() + 1}月</a></li>
        break
    }
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          { y }
          <li style={Object.assign({}, styles.menuItem, styles.menuItemLast)}>
            <a onClick={this.handleMyClick.bind(this)}>我的</a>&nbsp;
            <a>增加</a>
          </li>
        </ul>
        <div style={styles.calendar}>{ c }</div>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}><a onClick={this.handleTodayClick.bind(this)}>今天</a></li>
          <li style={styles.menuItem}><a onClick={this.handleCalendarClick.bind(this)}>日历</a></li>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemLast)}>收件箱</li>
        </ul>
      </div>
    )
  }
}

const styles = Object.assign({},
  require('../styles/components/root'),
  require('../styles/components/menu'), {
  calendar: {
    flex: 1,
    display: 'flex'
  }
})

export default Calendar
