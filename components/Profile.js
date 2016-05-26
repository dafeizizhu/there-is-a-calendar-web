import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class Profile extends Component {
  handleBackClick() {
    hashHistory.goBack()
  }
  render() {
    const { avatar, name, id } = this.props
    const avatarThumb = avatar ? <img src={avatar} /> : <img src={require('../images/default-avatar.jpg')} />
    const loginForm  = ''
    const detail = ''

    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}>
            <a onClick={this.handleBackClick.bind(this)}>返回</a>
          </li>
        </ul>
        <div style={styles.profile}>
          <div style={styles.avatar}>{ avatarThumb }</div>
          <div style={styles.info}>{ id ? detail : loginForm }</div>
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
    borderTop: '1px solid #dcdcdc'
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
  }
}

export default Profile
