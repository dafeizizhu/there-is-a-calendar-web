import React, { Component } from 'react'

import WEUIFormInput from '../common/weui/form/Input'

class EventDetail extends Component {
  render() {
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}><a>返回</a></li>
          <li style={styles.menuItem}>事件</li>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemLast)}></li>
        </ul>
        <div style={styles.content}>
          <form style={{flex: 1}}>
            <input type='hidden' value='' />
            <div className='weui_cells weui_cells_form'>
              <WEUIFormInput label='标题'>
                <input className='weui_input' type='text' placeholder='请输入标题' />
              </WEUIFormInput>
            </div>
          </form>
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
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px'
  }
})

export default EventDetail
