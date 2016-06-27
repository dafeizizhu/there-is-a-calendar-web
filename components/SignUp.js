import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import Loader from './common/Loader'
import Alert from './common/Alert'

import WEUIFormInput from './common/weui/form/Input'

class SignUp extends Component {
  handleBackClick() {
    const { onBackClick } = this.props
    if (onBackClick) onBackClick()
  }
  handleSubmit(e) {
    e.preventDefault()

    const name = findDOMNode(this.refs.name).value
    const password = findDOMNode(this.refs.password).value
    const password2 = findDOMNode(this.refs.password2).value
    
    // TODO Validation
    
    const { onSubmit } = this.props
    if (onSubmit) onSubmit(name, password)
  }
  handleAlertOK() {
    const { onAlertOK } = this.props
    if (onAlertOK) onAlertOK()
  }
  render() {
    const { success, message, loading } = this.props
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}>
            <a onClick={this.handleBackClick.bind(this)}>返回</a>
          </li>
          <li style={styles.menuItem}>创建帐号</li>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemLast)}></li>
        </ul>
        <div style={styles.content}>
          <form style={{flex: 1}} onSubmit={this.handleSubmit.bind(this)}>
            <div className='weui_cells weui_cells_form'>
              <WEUIFormInput label='用户名'>
                <input ref='name' className='weui_input' type='text' required='required' placeholder='请输入用户名' />
              </WEUIFormInput>
              <WEUIFormInput label='密码'>
                <input ref='password' className='weui_input' type='password' required='required' placeholder='请输入密码' />
              </WEUIFormInput>
              <WEUIFormInput label='确认密码'>
                <input ref='password2' className='weui_input' type='password' required='required' placeholder='请确认密码' />
              </WEUIFormInput>
              <div className='weui_cell'>
                <input className='weui_btn weui_btn_primary' type='submit' value='创建' />
              </div>
            </div>
          </form>
        </div>
        <Loader visibility={loading} />
        <Alert visibility={!loading && message} message={message} onOK={this.handleAlertOK.bind(this)} />
      </div>
    )
  }
}
 
const styles = Object.assign({},
  require('../styles/components/root'),
  require('../styles/components/menu'), {
  content: {
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'center'
  }
})

export default SignUp
