import React, { Component } from 'react'

import LunarCalendar from 'lunar-calendar'

class CalendarMonthItem extends Component {
  handleClick() {
    const { d, onClick } = this.props
    if (onClick) onClick(d)
  }
  render() {
    const { date, visibility, gray, current, selected, hasArrangement } = this.props
    const style = {
      visibility: visibility ? 'visible' : 'hidden',
      color: gray ? '#ccc' : ''
    }
    const year = date.getFullYear()
    const month = date.getMonth()
    const d = date.getDate()
    return (
      <span style={Object.assign({}, styles.container, style)} onClick={this.handleClick.bind(this)}>
        <span style={Object.assign({}, styles.wrapper, selected ? styles.selected : {}, current ? styles.current : {})}>
          <span style={styles.date}>{this.props.date.getDate()}</span>
          <span style={styles.lunar}>{LunarCalendar.solarToLunar(year, month + 1, d).lunarDayName}</span>
        </span>
        <span style={Object.assign({}, styles.arrangement, {visibility: hasArrangement ? 'visible' : 'hidden'})}></span>
      </span>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  date: {
    lineHeight: '30px',
    fontSize: '20px'
  },
  lunar: {
    lineHeight: '12px',
  },
  arrangement: {
    backgroundColor: '#cccccc',
    borderRadius: '50%',
    display: 'block',
    width: '8px',
    height: '8px',
    marginTop: '10px'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  current: {
    width: '50px',
    height: '50px',
    color: '#fff',
    borderRadius: '50%',
    background: 'red'
  },
  selected: {
    width: '50px',
    height: '50px',
    color: '#fff',
    borderRadius: '50%',
    background: 'black'
  }
}

export default CalendarMonthItem
