import React, { Component } from 'react'

class Loader extends Component {
  render() {
    const { visibility } = this.props
    return (
      <div style={Object.assign({}, styles.loader, { visibility: visibility ? 'visible' : 'hidden' })}>
        <div className='loader'>
          <div className='ball-pulse'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  loader: {
    backgroundColor: 'rgba(255, 0, 0, .5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Loader
