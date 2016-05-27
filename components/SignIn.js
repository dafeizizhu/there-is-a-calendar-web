import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { hashHistory } from 'react-router'

import { fetchSignUp } from '../actions/SignIn'

class SignIn extends Component {
  handleBackClick() {
    const { onBack } = this.props
    if (onBack) onBack()
  }
  handleSubmit(e) {
    e.preventDefault()

    const name = findDOMNode(this.refs.name).value
    const password = findDOMNode(this.refs.password).value
    const { onSubmit } = this.props
    if (onSubmit) onSubmit(name, password)
  }
  handleSingUpClick() {
    // TODO
  }
  render() {
    const avatarThumb = <img style={styles.thumb} src={require('../images/default-avatar.jpg')} />
    const form  = (
      <form style={styles.form} onSubmit={this.handleSubmit.bind(this)}>
        <input ref='name' style={styles.formItem} type='text' placeholder='输入您的用户名' required='required' />
        <input ref='password' style={styles.formItem} type='password' placeholder='输入您的密码' required='required' />
        <input style={styles.formItem} type='submit' value='登录' />
        <input type='hidden' name='id' value={this.props.id} />
        <div style={styles.formItem}>
          <a style={styles.signUp} onClick={this.handleSingUpClick.bind(this)}>创建帐号</a>
        </div>
      </form>
    )

    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}>
            <a onClick={this.handleBackClick.bind(this)}>返回</a>
          </li>
        </ul>
        <div style={styles.profile}>
          <div style={styles.wrapper}>
            <div style={styles.avatar}>{ avatarThumb }</div>
            <div style={styles.content}>{ form }</div>
          </div>
        </div>
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
  }
}

export default SignIn 
