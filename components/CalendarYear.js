import React, { Component } from 'react'

import CalendarYearItem from './CalendarYearItem'

class CalendarYear extends Component {
  handleMonthClick(month) {
    const { onMonthClick } = this.props
    if (onMonthClick) onMonthClick(month)
  }
  render() {
    const { date, currentDate, style } = this.props
    const year = date.getFullYear()
    const rows = []

    for (var i = 0; i < 12; i++) {
      let row = Math.floor(i / 3)
      if (!rows[row]) {
        rows[row] = []
      }
      rows[row].push(<CalendarYearItem style={styles.item} key={i} month={i} date={new Date(year, i, 1)} currentDate={currentDate} onClick={this.handleMonthClick.bind(this)}/>)
    }

    return (
      <div style={styles.calendar}>
        <h2 style={styles.title}>{year}年</h2>
        <div style={styles.container}>{rows.map(((row, i) => <div style={styles.row} key={i}>{row}</div>))}</div> 
      </div>
    )
  }
}

const styles = {
  calendar: {
    flexDirection: 'column',
    flex: 1,
    display: 'flex'
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  item: {
    flex: 1
  },
  title: {
    borderBottom: '1px solid gray',
    fontSize: '30px',
    lineHeight: 1.5,
    padding: '5px',
    fontWeight: 'normal'
  },
  row: {
    flex: 1,
    display: 'flex'
  }
}

export default CalendarYear
