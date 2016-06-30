import React, { Component } from 'react'

class CalendarPicker extends Component {
  handleLabelClick(calendarId, evt) {
    const { onLabelClick } = this.props
    if (onLabelClick) onLabelClick(calendarId)
  }
  handleBackClick() {
    const { onBackClick } = this.props
    if (onBackClick) onBackClick()
  }
  render() {
    const { calendar, calendarIds, calendars } = this.props
    const labels = calendarIds.map(calendarId => (
      <label key={calendarId} className='weui_cell weui_check_label' htmlFor={calendarId}>
        <div className='weui_cell_bd weui_cell_primary'>
          <p onClick={this.handleLabelClick.bind(this, calendarId)}>{ calendars[calendarId].name }</p>
        </div>
        <div className='weui_cell_ft'>
          <input type='radio' className='weui_check' name='calendar' id={calendarId} checked={ calendarId == calendar ? 'checked' : ''}/>
          <span className='weui_icon_checked'></span>
        </div>
      </label>
    ))
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}><a onClick={this.handleBackClick.bind(this)}>返回</a></li>
          <li style={styles.menuItem}>选择日历</li>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemLast)}></li>
        </ul>
        <div style={styles.content}>
          <div className='weui_cells weui_cells_radio' style={{flex: 1, overflowY: 'auto'}}>{ labels }</div>
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
    display: 'flex'
  }
})

export default CalendarPicker
