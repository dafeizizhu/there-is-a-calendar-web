import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import calendarApp from './reducers'

import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore)

let store = createStoreWithMiddleware(calendarApp)
let rootElement = document.createElement('div')

document.body.appendChild(rootElement)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
