import React, { Component } from 'react'

import CalendarYearItem from './CalendarYearItem'

class CalendarYear extends Component {
  handleMonthClick(month) {
    const { onMonthClick } = this.props
    if (onMonthClick) onMonthClick(month)
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
        <ul style={styles.title}>
          <li style={Object.assign({}, styles.titleItem, styles.titleItemFirst)}>
            <a onClick={this.handlePrevYearClick.bind(this)} style={{marginRight: '10px'}}>上一年</a>
          </li>
          <li style={styles.titleItem}>{year}年</li>
          <li style={Object.assign({}, styles.titleItem, styles.titleItemLast)}>
            <a onClick={this.handleNextYearClick.bind(this)}>下一年</a>
          </li>
        </ul> 
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
    borderBottom: '1px solid #ccc',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: '36px'
  },
  titleItem: {
    flex: 1,
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
  },
  row: {
    flex: 1,
    display: 'flex'
  }
}

export default CalendarYear
