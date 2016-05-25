import React, { Component } from 'react'
import moment from 'moment'
import LunarCalendar from 'lunar-calendar'

import CalendarMonthItem from './CalendarMonthItem'
import CalendarDayItem from './CalendarDayItem'

moment.locale('cn', {
  weekdays: '周日_周一_周二_周三_周四_周五_周六'.split('_')
})

class CalendarDay extends Component {
  handleDayClick(d) {
    const { onDayClick } = this.props
    if (onDayClick) { onDayClick(d) }
  }
  render() {
    const { date, currentDate } = this.props
    const year = date.getFullYear()
    const month = date.getMonth()
    const current = date.getFullYear() == currentDate.getFullYear() &&
      date.getMonth() == currentDate.getMonth()
    const d = date.getDate()
    const lunar = LunarCalendar.solarToLunar(year, month + 1, d)
    const days = []
    const hours = []

    let i, count = 0, itemDate
    for (i = date.getDay(); i > 0; i--) {
      itemDate = new Date(year, month, d - i)
      days.push(<li key={count} style={styles.day}><CalendarMonthItem date={itemDate} current={d - i == currentDate.getDate() && current} visibility={true} d={d - i} onClick={this.handleDayClick.bind(this)}/></li>)
      count++
    }
    for (i = 0; count < 7; count++) {
      itemDate = new Date(year, month, d + i)
      days.push(<li key={count} style={styles.day}><CalendarMonthItem date={itemDate} current={d + i == currentDate.getDate() && current} visibility={true} selected={ i == 0 } d={d + i} onClick={this.handleDayClick.bind(this)} /></li>)
      i++
    }

    for (i = 0; i < 24; i++) {
      hours.push(<li><CalendarDayItem date={new Date(year, month, d, i)} /></li>)
    }
    hours.push(<li><CalendarDayItem date={new Date(year, month, d + 1)} /></li>)

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
        <ul style={styles.days}>
          { days }
        </ul>
        <div style={styles.title}>{moment(date).locale('cn').format('YYYY年M月D日 dddd') + ' ' + lunar.GanZhiYear + '年' + lunar.lunarMonthName + lunar.lunarDayName}</div>
        <div style={styles.hours}>
          <ul>{ hours }</ul>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  headerDays: {
    display: 'flex',
    backgroundColor: '#f7f7f7',
    width: '100%',
    height: '21px',
    flex: 'none'
  },
  headerDay: {
    flex: 1,
    textAlign: 'center',
    lineHeight: '20px'
  },
  days: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#f7f7f7',
    height: '68px',
    flex: 'none'
  },
  day: {
    flex: 1
  },
  title: {
    lineHeight: '30px',
    fontSize: '20px',
    backgroundColor: '#f7f7f7',
    borderBottom: '1px solid #dcdcdc',
    textAlign: 'center',
    height: '31px',
    flex: 'none'
  },
  hours: {
    flex: 1,
    overflow: 'auto',
    paddingTop: '10px'
  }
}

export default CalendarDay
