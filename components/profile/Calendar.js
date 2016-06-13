import React, { Component } from 'react'

class Calendar extends Component {
  handleBackClick() {
    const { onBackClick } = this.props
    if (onBackClick) onBackClick()
  }
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
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}><a onClick={this.handleBackClick.bind(this)}>返回</a></li>
          <li style={styles.menuItem}>日历</li>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemLast)}><a onClick={this.handleAddClick.bind(this)}>增加</a></li>
        </ul>
        <div style={styles.content}>
          <ul>{ calendars }</ul>
        </div>
      </div>
    )
  }
}

const styles = Object.assign({},
  require('../../styles/components/root'),
  require('../../styles/components/menu'), {
  content: {
    flex: 1,
    background: 'rgba(255, 0, 0, .5)' 
  }
})

export default Calendar
