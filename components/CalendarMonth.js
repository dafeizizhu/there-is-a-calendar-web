import React, { Component } from 'react'
import moment from 'moment'

import CalendarMonthItem from './CalendarMonthItem'

class CalendarMonth extends Component {
  handlePrevMonthClick() {
    const { onPrevMonthClick } = this.props
    if (onPrevMonthClick) { onPrevMonthClick() }
  }
  handleNextMonthClick() {
    const { onNextMonthClick } = this.props
    if (onNextMonthClick) { onNextMonthClick() }
  }
  handleDayClick(d) {
    const { onDayClick } = this.props
    if (onDayClick) onDayClick(d)
  }
  render() {
    const { date, currentDate } = this.props
    const year = date.getFullYear()
    const month = date.getMonth()
    const current = date.getFullYear() == currentDate.getFullYear() &&
      date.getMonth() == currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const days = []

    let i, itemDate, count = 0, row, gray
    for (i = firstDay.getDay(); i > 0; i--) {
      row = Math.floor(count / 7)
      if (!days[row]) {
        days[row] = []
      }
      gray = count % 7 == 6 || count % 7 == 0
      days[row].push(<span style={styles.day}><CalendarMonthItem date={new Date(year, month, 1 - i)} current={false} gray={gray} visibility={false} /></span>)
      count++
    }
    for (i = 1; i <= new Date(year, month + 1, 1, -1).getDate(); i++) {
      row = Math.floor(count / 7)
      if (!days[row]) {
        days[row] = []
      }
      gray = count % 7 == 6 || count % 7 == 0
      days[row].push(<span key={count} style={styles.day}><CalendarMonthItem date={new Date(year, month, i)} current={current && i == currentDate.getDate()} gray={gray} visibility={true} d={i} onClick={this.handleDayClick.bind(this)}/></span>)
      count++
    }
    for (i = new Date(year, month + 1, 1, -1).getDay(); i < 6; i++) {
      row = Math.floor(count / 7)
      if (!days[row]) {
        days[row] = []
      }
      gray = count % 7 == 6 || count % 7 == 0
      days[row].push(<span style={styles.day}><CalendarMonthItem date={new Date(year, month + 1, i - new Date(year, month + 1, 1, -1).getDay() + 1)} current={false} gray={gray} visibility={false} /></span>)
      count++
    }

    return (
      <div style={styles.container}>
        <ul style={styles.headerDays}>
          <li style={Object.assign({}, styles.headerDay, {color: '#ccc'})}>日</li>
          <li style={styles.headerDay}>一</li>
          <li style={styles.headerDay}>二</li>
          <li style={styles.headerDay}>三</li>
          <li style={styles.headerDay}>四</li>
          <li style={styles.headerDay}>五</li>
          <li style={Object.assign({}, styles.headerDay, {color: '#ccc'})}>六</li>
        </ul>
        <ul style={styles.title}>
          <li style={Object.assign({}, styles.titleItem, styles.titleItemFirst)}>
            <a onClick={this.handlePrevMonthClick.bind(this)}>上月</a>
          </li>
          <li style={styles.titleItem}>{month + 1}月</li>
          <li style={Object.assign({}, styles.titleItem, styles.titleItemLast)}>
            <a onClick={this.handleNextMonthClick.bind(this)}>下月</a>
          </li>
        </ul>
        <ul style={styles.days}>
          { days.map((row, i) => <li key={i} style={styles.row} >{row}</li>) }
        </ul>
      </div>
    )
  }
}

var styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  headerDays: {
    display: 'flex',
    backgroundColor: '#f7f7f7',
    borderBottom: '1px solid #dcdcdc',
    width: '100%',
    height: '21px'
  },
  headerDay: {
    flex: 1,
    textAlign: 'center',
    lineHeight: '20px'
  },
  days: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: '1'
  },
  day: {
    flex: 1
  },
  row: {
    paddingTop: '10px',
    display: 'flex',
    flex: 1,
    borderBottom: '1px solid #f0f0f0'
  },
  title: {
    width: '100%',
    display: 'flex',
    height: '36px'
  },
  titleItem: {
    flex: 1,
    lineHeight: '36px',
    fontSize: '18px',
    color: 'red',
    textAlign: 'center'
  },
  titleItemFirst: {
    textAlign: 'left',
    paddingLeft: '20px'
  },
  titleItemLast: {
    textAlign: 'right',
    paddingRight: '20px'
  }
}

export default CalendarMonth
