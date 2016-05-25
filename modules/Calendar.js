import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from '../configureStore'

import CalendarContainer from '../containers/Calendar'
import calendarApp from '../reducers/Calendar'

const store = configureStore(calendarApp)

class CalendarModule extends Component {
  render() {
    return (
      <Provider store={store}>
        <CalendarContainer />
      </Provider>
    )
  }
}

export default CalendarModule
