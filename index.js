import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducers from './reducers'

import Calendar from './modules/Calendar'
import Profile from './modules/Profile'
import SignIn from './modules/SignIn'

import configureStore from './configureStore'

const store = configureStore(reducers)
const history = syncHistoryWithStore(hashHistory, store)

// css reset
require('./styles/reset.css')
require('./styles/app.css')
require('./styles/loader.css')

const rootElement = document.createElement('div')
rootElement.id = 'root'
document.body.appendChild(rootElement)

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Calendar} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/profile' component={Profile} />
      <Route path='/signin' component={SignIn} />
    </Router>
  </Provider>,
  rootElement
)
