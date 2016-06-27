import React, { Component } from 'react'

class WEUIFormInput extends Component {
  render() {
    const { label, children } = this.props
    return (
      <div className='weui_cell'>
        <div className='weui_cell_hd'>
          <label className='weui_label'>{label}</label>
        </div>
        <div className='weui_cell_bd weui_cell_primary'>{ children }</div>
      </div>
    )
  }
}

export default WEUIFormInput

