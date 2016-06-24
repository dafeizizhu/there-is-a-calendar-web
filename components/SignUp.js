import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import Loader from './common/Loader'
import Alert from './common/Alert'

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
    const form = (
      <form style={styles.form} onSubmit={this.handleSubmit.bind(this)}>
        <input ref='name' style={styles.formItem} type='text' placeholder='输入您的用户名' required='required' disabled={ success ? 'disabled' : ''}/>
        <input ref='password' style={styles.formItem} type='password' placeholder='输入您的密码' required='required' disabled={ success ? 'disabled' : ''} />
        <input ref='password2' style={styles.formItem} type='password' placeholder='确认您的密码' required='required' disabled={ success ? 'disabled' : ''} />
        <input style={styles.formItem} type='submit' value='创建' disabled={ success ? 'disabled' : ''} />
      </form>
    )
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}>
            <a onClick={this.handleBackClick.bind(this)}>返回</a>
          </li>
          <li style={styles.menuItem}></li>
          <li style={styles.menuItem}></li>
        </ul>
        <div style={styles.content}>{ form }</div>
        <Loader visibility={loading} />
        <Alert visibility={!loading && message} message={message} onOK={this.handleAlertOK.bind(this)} />
      </div>
    )
  }
}
 
const styles = Object.assign({},
  require('../styles/components/root'),
  require('../styles/components/menu'), 
  require('../styles/components/form'), {
  content: {
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'center'
  }
})

export default SignUp
