import React, { Component, PropTypes } from 'react'

import CalendarYear from './CalendarYear'
import CalendarMonth from './CalendarMonth'

class Calendar extends Component {
  handleTodayClick() {
    const { onTodayClick, type } = this.props
    if (onTodayClick) onTodayClick(type)
  }
  handleYearClick() {
    const { onYearClick } = this.props
    if (onYearClick) onYearClick()
  }
  handlePrevYearClick() {
    const { onPrevYearClick } = this.props
    if (onPrevYearClick) onPrevYearClick()
  }
  handleNextYearClick() {
    const { onNextYearClick } = this.props
    if (onNextYearClick) onNextYearClick()
  }
  render() {
    const { date, currentDate, style, type } = this.props
    let c = (<div>No match type[{type}]!</div>),
        y = ''
    switch (type) {
      case 'year':
        c = <CalendarYear date={date} currentDate={currentDate}
          onTodayClick={this.props.onTodayClick}
          onMonthClick={this.props.onMonthClick} />
        y = (
          <li style={Object.assign({}, styles.menuItem, styles.firstMenuItem)}>
            <a onClick={this.handlePrevYearClick.bind(this)} style={{marginRight: '10px'}}>上一年</a>
            <a onClick={this.handleNextYearClick.bind(this)}>下一年</a>
          </li>
        )
        break
      case 'month':
        c = <CalendarMonth date={date} currentDate={currentDate} /> 
        y = <li style={Object.assign({}, styles.menuItem, styles.firstMenuItem)}><a onClick={this.handleYearClick.bind(this)}>{date.getFullYear()}年</a></li>
        break
    }
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          { y }
          <li style={Object.assign({}, styles.menuItem, styles.lastMenuItem)}>增加</li>
        </ul>
        <div style={styles.calendar}>{ c }</div>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.firstMenuItem)}><a onClick={this.handleTodayClick.bind(this)}>今天</a></li>
          <li style={styles.menuItem}>日历</li>
          <li style={Object.assign({}, styles.menuItem, styles.lastMenuItem)}>收件箱</li>
        </ul>
      </div>
    )
  }
}

const styles = {
  root: {
    fontFamily: '微软雅黑, sans-serif',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none'
  },
  menu: {
    height: '50px',
    display: 'flex',
    backgroundColor: '#f7f7f7',
    boxSizing: 'border-box',
    borderTop: '1px solid #dcdcdc'
  },
  menuItem: {
    lineHeight: '50px',
    fontSize: '20px',
    color: 'red',
    flex: 1,
    textAlign: 'center'
  },
  firstMenuItem: {
    paddingLeft: '20px',
    textAlign: 'left',
  },
  lastMenuItem: {
    paddingRight: '20px',
    textAlign: 'right',
  },
  calendar: {
    flex: 1,
    display: 'flex'
  }
}

export default Calendar
