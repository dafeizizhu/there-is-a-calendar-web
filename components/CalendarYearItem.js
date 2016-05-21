import React, { Component } from 'react'

class CalendarYearItem extends Component {
  render() {
    const { date, currentDate, style } = this.props
    const year = date.getFullYear()
    const month = date.getMonth()
    const current = date.getFullYear() == currentDate.getFullYear() &&
      date.getMonth() == currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const days = []

    let i, itemDate
    for (i = firstDay.getDay(); i > 0; i--) {
      itemDate = new Date(year, month, 1 - i).getDate()
      days.push(<span key={[year, month, itemDate, 'gray'].join('-')} style={Object.assign({}, styles.item, styles.gray)}>{itemDate}</span>)
    }
    for (i = 1; i <= new Date(year, month + 1, 1, -1).getDate(); i++) {
      itemDate = new Date(year, month, i).getDate()
      if (current && i == currentDate.getDate()) {
        days.push(<span key={[year, month, itemDate].join('-')} style={Object.assign({}, styles.item, styles.current)}>{itemDate}</span>)
      } else {
        days.push(<span key={[year, month, itemDate].join('-')} style={styles.item}>{itemDate}</span>)
      }
    }
    for (i = new Date(year, month + 1, 1, -1).getDay(); i < 6; i++) {
      itemDate = new Date(year, month + 1, i - new Date(year, month + 1, 1, -1).getDay() + 1).getDate()
      days.push(<span key={[year, month, itemDate, 'gray'].join('-')} style={Object.assign({}, styles.item, styles.gray)}>{itemDate}</span>)
    }

    return (
      <div style={Object.assign({}, styles.container, style)}>
        <div style={styles.title}>{month + 1}月</div>
        <div style={styles.days}>{days}</div>
      </div>
    )
  }
}

const styles = {
  container: {
    boxSizing: 'border-box',
    borderBottom: '1px solid gray',
    borderRight: '1px solid gray',
    padding: '5px'
  },
  days: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  item: {
    display: 'inline-block',
    width: '14.28571428%',
    textAlign: 'center',
    fontSize: '80%',
    lineHeight: 1.5
  },
  gray: {
    color: '#ccc'
  },
  current: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%'
  },
  title: {
    color: 'red',
    fontSize: '16px',
    lineHeight: 1.5
  }
}
    

export default CalendarYearItem
