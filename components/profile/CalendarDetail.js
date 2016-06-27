import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import Loader from '../common/Loader'
import Alert from '../common/Alert'

import WEUIFormInput from '../common/weui/form/Input'

class CalendarDetail extends Component {
  constructor() {
    super()
    this.colors = []
    this.colors.push({ name: '红色', key: 'red' })
    this.colors.push({ name: '橙色', key: 'orange' })
    this.colors.push({ name: '黄色', key: 'yellow' })
    this.colors.push({ name: '绿色', key: 'green' })
    this.colors.push({ name: '灰色', key: 'gray' })
    this.colors.push({ name: '蓝色', key: 'blue' })
  }
  handleBackClick() {
    const { onBackClick } = this.props
    if (onBackClick) onBackClick()
  }
  handleSubmit(evt) {
    evt.preventDefault()

    const id = findDOMNode(this.refs.id).value
    const name = findDOMNode(this.refs.name).value
    const { color } = this.props

    const { onSubmit } = this.props
    if (onSubmit) onSubmit(name, color, id)
  }
  handleColorClick(color) {
    const { onColorClick } = this.props
    if (onColorClick) onColorClick(color)
  }
  handleNameChange(evt) {
    const { onNameChange } = this.props
    if (onNameChange) onNameChange(evt.target.value)
  }
  handleAlertOK() {
    const { onAlertOK } = this.props
    if (onAlertOK) onAlertOK()
  }
  render() {
    const { id, name, color, success, message, loading } = this.props
    return (
      <div style={styles.root}>
        <ul style={styles.menu}>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemFirst)}><a onClick={this.handleBackClick.bind(this)}>返回</a></li>
          <li style={styles.menuItem}>日历</li>
          <li style={Object.assign({}, styles.menuItem, styles.menuItemLast)}></li>
        </ul>
        <div style={styles.content}>
          <form style={{flex: 1}} onSubmit={this.handleSubmit.bind(this)}>
            <input ref='id' type='hidden' value={id} />
            <div className='weui_cells weui_cells_form'>
              <WEUIFormInput label='日历名称'>
                <input ref='name' className='weui_input' type='text' placeholder='请输入日历名称' required='required' value={name} onChange={this.handleNameChange.bind(this)} />
              </WEUIFormInput>
            </div>
            <div className='weui_cells_title'>颜色</div>
            <div className='weui_cells weui_cells_form'>
              { this.colors.map((c) => (
                <label key={c.key} style={styles.color} onClick={this.handleColorClick.bind(this, c.key)}>
                  <span style={Object.assign({}, styles.colorIcon, { backgroundColor: c.key })}></span>
                  <span style={{ flex: 1 }}>{c.name}</span>
                  <img style={Object.assign({}, styles.check, c.key == color ? styles.checked : {})} src={require('./checked.png')} />
                </label>)
              )}
            </div>
            <div className='weui_cells weui_cells_form'>
              <div className='weui_cell'>
                <input className='weui_btn weui_btn_primary' type='submit' value='完成' />
              </div>
            </div>
          </form>
        </div>
        <Loader visibility={loading} />
        <Alert visibility={!loading && message} message={message} onOK={this.handleAlertOK.bind(this)}/>
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
  },
  color: {
    height: '40px',
    lineHeight: '40px',
    borderBottom: '1px solid #d9d9d9',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '10px'
  },
  colorIcon: {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    verticalAlign: 'center',
    borderRadius: '50%',
    marginLeft: '16px',
    marginRight: '16px',
    flex: 'none'
  },
  check: {
    visibility: 'hidden',
    flex: 'none'
  },
  checked: {
    visibility: 'visible'
  }
})

export default CalendarDetail
