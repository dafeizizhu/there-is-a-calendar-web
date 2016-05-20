import React, { Component } from 'react'

import CalendarYearItem from './CalendarYearItem'

class CalendarYear extends Component {
  render() {
    const { date, currentDate } = this.props
    const year = date.getFullYear()
    const items = []

    for (var i = 0; i < 12; i++) {
      items.push(<CalendarYearItem style={styles.item} key={i} date={new Date(year, i, 1)} currentDate={currentDate} />)
    }

    return (
      <div>
        <h2 style={styles.title}>{year}年</h2>
        <div style={styles.container}>{items}</div>     
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  item: {
    width: '33.333333%'
  },
  title: {
    borderBottom: '1px solid gray',
    fontSize: '30px',
    lineHeight: 1.5,
    padding: '5px',
    fontWeight: 'normal'
  }
}

export default CalendarYear
