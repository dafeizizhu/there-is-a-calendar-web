import React, { Component } from 'react'

import ListView from '../common/ListView'

class CalendarItem extends Component {
  render() {
    const { item } = this.props
    return (
      <div style={styles.calendarItem}>
        <span style={Object.assign({}, styles.colorIcon, { backgroundColor: item.color })}></span>
        <span style={styles.name}>{item.name}</span>
      </div>
    )
  }
}

class Calendar extends Component {
  handleBackClick() {
    const { onBackClick } = this.props
    if (onBackClick) onBackClick()
  }
  handleAddClick() {
    const { onAddClick } = this.props
    if (onAddClick) onAddClick()
  }
  handleEditClick(key) {
    const { onEditClick } = this.props
    if (onEditClick) onEditClick(key)
  }
  handleRemoveClick(key) {
    const { onRemoveClick } = this.props
    if (onRemoveClick) onRemoveClick(key)
  }
  render() {
    const { result, entities } = this.props
    const keys = entities.users[result].calendars
    const data = entities.calendars
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}><a onClick={this.handleBackClick.bind(this)}>返回</a></li>
          <li style={styles.menuItem}>日历</li>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemLast)}><a onClick={this.handleAddClick.bind(this)}>增加</a></li>
        </ul>
        <div style={styles.content}>
          <ListView keys={keys} data={data} renderItem={(item) => <CalendarItem item={item} />} 
            onEditClick={this.handleEditClick.bind(this)}
            onRemoveClick={this.handleRemoveClick.bind(this)} />
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
    overflowY: 'scroll'
  },
  calendarItem: {
    display: 'flex',
    height: '40px',
    borderBottom: '1px solid #ccc',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  colorIcon: {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    verticalAlign: 'center',
    borderRadius: '50%',
    marginLeft: '16px',
    marginRight: '16px',
    flex: 'none'
  },
  name: {
    flex: 1,
    fontSize: '18px'
  }
})

export default Calendar
