import React, { Component, PropTypes } from 'react'

import CalendarYear from './CalendarYear'

class Calendar extends Component {
  render() {
    const { type } = this.props
    let c = (<div>No match type[{type}]!</div>)
    switch (type) {
      case 'year':
        c = <CalendarYear date={this.props.date} currentDate={this.props.currentDate}/>
    }
    return (
      <div style={styles.root}>{ c }</div>
    )
  }
}

const styles = {
  root: {
    fontFamily: '微软雅黑, sans-serif'
  }
}

export default Calendar
