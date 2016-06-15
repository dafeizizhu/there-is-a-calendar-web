import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import { fetchSignUp } from '../actions/SignIn'

import Loader from './Loader'

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
  handleSingUpClick() {
    const { onSignUpClick } = this.props
    if (onSignUpClick) onSignUpClick()
  }
  render() {
    const { id, loading, success, message } = this.props
    const avatarThumb = <img style={styles.thumb} src={require('../images/default-avatar.jpg')} />
    const form  = (
      <form style={styles.form} onSubmit={this.handleSubmit.bind(this)}>
        <input ref='name' style={styles.formItem} type='text' placeholder='输入您的用户名' required='required' />
        <input ref='password' style={styles.formItem} type='password' placeholder='输入您的密码' required='required' />
        <input style={styles.formItem} type='submit' value='登录' />
        <input type='hidden' name='id' value={id} />
        <div style={styles.formItem}>
          <a style={styles.signUp} onClick={this.handleSingUpClick.bind(this)}>创建帐号</a>
        </div>
      </form>
    )
    const alreadySignIn = <div style={{fontSize: '16px'}}>您已登录！</div>
    const content = id ? alreadySignIn : form
    const tip = success ? '' : (
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
          <li style={styles.menuItem}>登入</li>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemLast)}></li>
        </ul>
        <div style={styles.profile}>
          <div style={styles.wrapper}>
            <div style={styles.avatar}>{ avatarThumb }</div>
            <div style={styles.content}>{ loading ? '' : tip }</div>
            <div style={styles.content}>{ content }</div>
          </div>
        </div>
        <Loader visibility={loading} />
      </div>
    )
  }
}

const styles = Object.assign({},
  require('../styles/components/root'),
  require('../styles/components/menu'), 
  require('../styles/components/form'), {
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: '50%',
    overflow: 'hidden',
    flex: 1
  },
  thumb: {
    width: '150px',
    height: '150px'
  },
  content: {
    flex: 1,
    marginTop: '16px'
  }
})

export default SignIn 
