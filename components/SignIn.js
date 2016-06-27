import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import Loader from './common/Loader'
import Alert from './common/Alert'

import WEUIFormInput from './common/weui/form/Input'

class SignIn extends Component {
  handleBackClick() {
    const { onBack } = this.props
    if (onBack) onBack()
  }
  handleSubmit(e) {
    e.preventDefault()

    const name = findDOMNode(this.refs.name).value
    const password = findDOMNode(this.refs.password).value

    // TODO Validation

    const { onSubmit } = this.props
    if (onSubmit) onSubmit(name, password)
  }
  handleSignUpClick() {
    const { onSignUpClick } = this.props
    if (onSignUpClick) onSignUpClick()
  }
  handleAlertOK() {
    const { onAlertOK } = this.props
    if (onAlertOK) onAlertOK()
  }
  render() {
    const { id, loading, success, message } = this.props
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}>
            <a onClick={this.handleBackClick.bind(this)}>返回</a>
          </li>
          <li style={styles.menuItem}>登入</li>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemLast)}></li>
        </ul>
        <div style={styles.profile}>
          <img style={styles.thumb} src={require('../images/default-avatar.jpg')} />
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className='weui_cells weui_cells_form'>
              <WEUIFormInput label='用户名'>
                <input ref='name' className='weui_input' type='text' required='required' placeholder='请输入用户名' />
              </WEUIFormInput>
              <WEUIFormInput label='密码'>
                <input ref='password' className='weui_input' type='password' required='required' placeholder='请输入密码' />
              </WEUIFormInput>
              <div className='weui_cell'>
                <input className='weui_btn weui_btn_primary' type='submit' value='登入' />
              </div>
            </div>
          </form>
          <a style={styles.signUp} onClick={this.handleSignUpClick.bind(this)}>创建帐号</a>
        </div>
        <Loader visibility={loading} />
        <Alert visibility={!loading && !success && message} message={message} onOK={this.handleAlertOK.bind(this)} />
      </div>
    )
  }
}

const styles = Object.assign({},
  require('../styles/components/root'),
  require('../styles/components/menu'), {
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  thumb: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '10px'
  },
  content: {
    flex: 1,
    marginTop: '16px'
  },
  signUp: {
    fontSize: '16px',
    textAlign: 'center'
  }
})

export default SignIn 
