import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import Loader from './Loader'

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
    const tip = (
      <div style={Object.assign({}, styles.message, success ? styles.success : styles.error)}>
        { message }
      </div>
    )
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}>
            <a onClick={this.handleBackClick.bind(this)}>返回</a>
          </li>
        </ul>
        <div style={styles.content}>{ loading ? '' : tip }</div>
        <div style={styles.content}>{ form }</div>
        <Loader visibility={loading} />
      </div>
    )
  }
}

const styles = {
  root: {
    fontFamily: '微软雅黑, sans-serif',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none'
  },
  menu: {
    height: '50px',
    display: 'flex',
    backgroundColor: '#f7f7f7',
    boxSizing: 'border-box',
    borderTop: '1px solid #dcdcdc',
    flex: 'none'
  },
  menuItem: {
    lineHeight: '50px',
    fontSize: '20px',
    color: 'red',
    flex: 1,
    textAlign: 'center'
  },
  menuItemFirst: {
    paddingLeft: '20px',
    textAlign: 'left',
  },
  form: {
    width: '256px',
    display: 'flex',
    flexDirection: 'column'
  },
  formItem: {
    height: '44px',
    fontSize: '16px',
    marginBottom: '16px',
    boxSizing: 'border-box',
    padding: '0 8px',
    textAlign: 'center'
  },
  content: {
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'center'
  },
  message: {
    width: '256px',
    fontSize: '16px'
  },
  success: {
    color: 'green'
  },
  error: {
    color: 'red'
  }
}

export default SignUp
