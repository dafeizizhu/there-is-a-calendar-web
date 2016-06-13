import React, { Component } from 'react'

class CalendarDetail extends Component {
  handleBackClick() {
    const { onBackClick } = this.props
    if (onBackClick) onBackClick()
  }
  render() {
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}><a onClick={this.handleBackClick.bind(this)}>返回</a></li>
          <li style={styles.menuItem}>日历</li>
          <li style={styles.menuItem}></li>
        </ul>
        <div style={styles.content}>CalendarDetail</div>
      </div>
    )
  }
}

const styles = Object.assign({},
  require('../../styles/components/root'),
  require('../../styles/components/menu'), 
  require('../../styles/components/form'), {
  content: {
    flex: 1,
    background: 'rgba(255, 0, 0, .5)' 
  }
})

export default CalendarDetail
