import React, { Component } from 'react'

import WEUIFormInput from '../common/weui/form/Input'

class EventDetail extends Component {
  handleCalendarClick() {
    const { onCalendarClick } = this.props
    if (onCalendarClick) onCalendarClick()
  }
  render() {
    const { calendar, calendars } = this.props
    let content = (
      <form style={{flex: 1}}>
        <input type='hidden' value='' />
        <div className='weui_cells weui_cells_form'>
          <WEUIFormInput label='标题'>
            <input className='weui_input' type='text' placeholder='请输入标题' />
          </WEUIFormInput>
          <WEUIFormInput label='位置'>
            <input className='weui_input' type='text' placeholder='请输入位置' />
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
              <input className='weui_input' type='date' style={{width: 'auto'}}/>
            </div>
          </WEUIFormInput>
          <WEUIFormInput label='结束'>
            <div style={{textAlign: 'right'}}>
              <input className='weui_input' type='date' style={{width: 'auto'}}/>
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
