import React, { Component } from 'react'
import moment from 'moment'

class CalendarDayItem extends Component {
  render() {
    const { date } = this.props
    return (
      <span style={styles.container}>
        <span style={styles.hour}>{moment(date).format('HH:mm')}</span>
        <span style={styles.sep}></span>
      </span>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    height: '30px',
  },
  hour: {
    display: 'block',
    width: '40px',
    textAlign: 'center',
    position: 'relative',
    top: '-5px'
  },
  sep: {
    flex: 1,
    height: '1px',
    background: '#ccc'
  }
}

export default CalendarDayItem
