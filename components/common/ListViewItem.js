import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

class ListViewItem extends Component {
  constructor() {
    super()
    this.delta = 0
  }
  handleTouchStart(evt) {
    this.touchStartClientX = event.touches[0].clientX
  }
  handleTouchMove(evt) {
    const delta = evt.touches[0].clientX - this.touchStartClientX
    let totalDelta = delta + this.delta
    if (totalDelta < -100) {
      totalDelta = -100
      this.delta = totalDelta - delta
    }
    if (totalDelta > 0) {
      totalDelta = 0
      this.delta = totalDelta - delta
    }
    findDOMNode(this.refs.item).style.transform = 'translateX(' + totalDelta + 'px)'
  }
  handleTouchEnd(evt) {
    const delta = evt.changedTouches[0].clientX - this.touchStartClientX
    let totalDelta = delta + this.delta
    if (totalDelta <= -50) {
      totalDelta = -100
    }
    if (totalDelta > -50) {
      totalDelta = 0
    }
    this.delta = totalDelta
    findDOMNode(this.refs.item).style.transform = 'translateX(' + totalDelta + 'px)'
  }
  render() {
    const { item, renderItem } = this.props
    return (
      <div style={styles.item} ref='item'
        onTouchStart={this.handleTouchStart.bind(this)}
        onTouchMove={this.handleTouchMove.bind(this)}
        onTouchEnd={this.handleTouchEnd.bind(this)}>
        { renderItem(item) }
      </div>
    )
  }
}

const styles = {
  item: {
    flex: 1,
    zIndex: 1
  }
}

export default ListViewItem
