import React, { Component } from 'react'

class Calendar extends Component {
  handleAddClick() {
    const { onAddClick } = this.props
    if (onAddClick) onAddClick()
  }
  render() {
    const { result, entities } = this.props
    const calendars = entities.users[result].calendars.map(calendarId => {
      const calendar = entities.calendars[calendarId]
      return (
        <li>{calendar.name}</li>
      )
    })
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.firstMenuItem)}><a>返回</a></li>
          <li style={styles.menuItem}>日历</li>
          <li style={Object.assign({}, styles.menuItem, styles.lastMenuItem)}><a onClick={this.handleAddClick.bind(this)}>增加</a></li>
        </ul>
        <div style={styles.content}>
          <ul>{ calendars }</ul>
        </div>
      </div>
    )
  }
}

const styles = {
  root: {
    fontFamily: '微软雅黑, sans-serif',
    height: '100%',
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
  content: {
    flex: 1,
    background: 'rgba(255, 0, 0, .5)' 
  }
}

export default Calendar
