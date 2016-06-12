import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import 'babel-polyfill'

import reducers from './reducers'

import Calendar from './modules/Calendar'
import Profile from './modules/Profile'
import SignIn from './modules/SignIn'
import SignUp from './modules/SignUp'
import ProfileCalendars from './modules/profile/Calendars'

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

// auth
function requireAuth(nextState, replace) {
  if (!store.getState().root.Profile.id) {
    replace({
      pathname: '/signin'
    })
  }
}

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Calendar} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/profile' component={Profile} onEnter={requireAuth}/>
      <Route path='/profile/calendars' component={ProfileCalendars} onEnter={requireAuth} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </Router>
  </Provider>,
  rootElement
)
