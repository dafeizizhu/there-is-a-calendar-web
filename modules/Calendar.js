import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import CalendarContainer from '../containers/Calendar'
import calendarApp from '../reducers/Calendar'

import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore)

let store = createStoreWithMiddleware(calendarApp)

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
