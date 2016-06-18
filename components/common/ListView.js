import React, { Component } from 'react'

import ListViewItem from './ListViewItem'

class ListView extends Component {
  handleEditClick(key) {
    const { onEditClick } = this.props
    if (onEditClick) onEditClick(key)
  }
  handleRemoveClick(key) {
    const { onRemoveClick } = this.props
    if (onRemoveClick) onRemoveClick(key)
  }
  render() {
    const { keys, data, renderItem } = this.props
    const list = keys.map((key) => (
      <li key={key} style={styles.item}>
        <ListViewItem item={data[key]} renderItem={renderItem} />
        <div style={styles.menu}>
          <a style={Object.assign({}, styles.menuItem, {backgroundColor: 'orange'})} onClick={this.handleEditClick.bind(this, key)}>编辑</a>
          <a style={Object.assign({}, styles.menuItem, {backgroundColor: 'red'})} onClick={this.handleRemoveClick.bind(this, key)}>删除</a>
        </div>
      </li>
    ))
    return (
      <ul>{ list }</ul>
    )
  }
}

const styles = {
  item: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden'
  },
  menu: {
    position: 'absolute',
    right: 0,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100px'
  },
  menuItem: {
    flex: 1,
    color: 'white',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default ListView
