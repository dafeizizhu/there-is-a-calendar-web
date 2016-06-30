import React, { Component } from 'react'
import moment from 'moment'

import WEUIFormInput from '../common/weui/form/Input'

class EventDetail extends Component {
  handleCalendarClick() {
    const { onCalendarClick } = this.props
    if (onCalendarClick) onCalendarClick()
  }
  handleTitleChange(evt) {
    const { onTitleChange } = this.props
    if (onTitleChange) onTitleChange(evt.target.value)
  }
  handleLocationChange(evt) {
    const { onLocationChange } = this.props
    if (onLocationChange) onLocationChange(evt.target.value)
  }
  handleBeginChange(evt) {
    const { onBeginChange } = this.props
    if (onBeginChange) onBeginChange(moment(evt.target.value.replace('T', ' ')).toDate())
  }
  handleEndChange(evt) {
    const { onEndChange } = this.props
    if (onEndChange) onEndChange(moment(evt.target.value.replace('T', ' ')).toDate())
  }
  render() {
    const { calendar, calendars } = this.props
    const { title, location, begin, end } = this.props
    const content = (
      <form style={{flex: 1}}>
        <input type='hidden' value='' />
        <div className='weui_cells weui_cells_form'>
          <WEUIFormInput label='标题'>
            <input className='weui_input' type='text' placeholder='请输入标题' onChange={this.handleTitleChange.bind(this)} value={title}/>
          </WEUIFormInput>
          <WEUIFormInput label='位置'>
            <input className='weui_input' type='text' placeholder='请输入位置' onChange={this.handleLocationChange.bind(this)} value={location}/>
          </WEUIFormInput>
        </div>
        <div className='weui_cells weui_cells_access'>
          <WEUIFormInput label='全天'>
            <div style={{textAlign: 'right'}}>
              <input className='weui_switch' type='checkbox' />
            </div>
          </WEUIFormInput>
          <WEUIFormInput label='开始'>
            <div style={{textAlign: 'right'}}>
              <input type='datetime-local' style={{border: 'none', outline: 'none'}} onChange={this.handleBeginChange.bind(this)} value={moment(begin).format('YYYY-MM-DDTHH:mm:00')} />
            </div>
          </WEUIFormInput>
          <WEUIFormInput label='结束'>
            <div style={{textAlign: 'right'}}>
              <input type='datetime-local' style={{border: 'none', outline: 'none'}} onChange={this.handleEndChange.bind(this)} value={moment(end).format('YYYY-MM-DDTHH:mm:00')}/>
            </div>
          </WEUIFormInput>
          <WEUIFormInput label='重复'>
            <div className='weui_cell_ft'>自定</div>
          </WEUIFormInput>
        </div>
        <div className='weui_cells weui_cells_access'>
          <WEUIFormInput label='日历'>
            <div className='weui_cell_ft' onClick={this.handleCalendarClick.bind(this)}>{ calendars[calendar].name }</div>
          </WEUIFormInput>
        </div>
        <div className='weui_cells weui_cells_form'>
          <div className='weui_cell'>
            <input className='weui_btn weui_btn_primary' type='submit' value='完成' />
          </div>
        </div>
      </form>
    )
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}><a>返回</a></li>
          <li style={styles.menuItem}>事件</li>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemLast)}></li>
        </ul>
        <div style={styles.content}>{ content }</div>
      </div>
    )
  }
}

const styles = Object.assign({}, 
  require('../../styles/components/root'),
  require('../../styles/components/menu'), {
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px'
  }
})

export default EventDetail
