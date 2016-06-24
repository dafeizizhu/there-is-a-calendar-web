import React, { Component } from 'react'

class Alert extends Component {
  handleOKClick(evt) {
    evt.preventDefault()
    const { onOK } = this.props
    if (onOK) onOK()
  }
  render() {
    const { visibility, message } = this.props
    return (
      <div style={Object.assign({}, styles.container, { visibility: visibility ? 'visible' : 'hidden' })}>
        <div style={styles.pop}>
          <div style={styles.message}>{ message }</div>
          <div style={styles.buttons}>
            <a style={styles.button} onClick={this.handleOKClick.bind(this)}>确定</a>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pop: {
    width: '280px',
    background: 'white',
    borderRadius: '10px'
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontSize: '16px',
    borderBottom: '1px solid #ccc'
  },
  buttons: {
    display: 'flex',
    height: '40px'
  },
  button: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    color: 'red'
  }
}

export default Alert
