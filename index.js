import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import calendarApp from './reducers'

let store = createStore(calendarApp)
let rootElement = document.createElement('div')

document.body.appendChild(rootElement)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
