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
import ProfileCalendar from './modules/profile/Calendar'
import ProfileCalendarNew from './modules/profile/CalendarNew'
import ProfileCalendarEdit from './modules/profile/CalendarEdit'
import ProfileEventNew from './modules/profile/EventNew'
import CalendarPicker from './modules/common/CalendarPicker'

import { check } from './actions/Check'

import configureStore from './utils/configureStore'
import fetchOriginState from './utils/fetchOriginState'

const store = configureStore(reducers)
const history = syncHistoryWithStore(hashHistory, store)

// css reset
require('./styles/reset.css')
require('./styles/app.css')
require('./styles/loader.css')
require('./styles/weui/weui.min.css')
require('./styles/weui/weui.yougerili.css')

const rootElement = document.createElement('div')
rootElement.id = 'root'
document.body.appendChild(rootElement)

// auth
function requireAuth(nextState, replace) {
  if (!store.getState().root.Profile.result) {
    replace({
      pathname: '/signin',
      query: {
        pathname: nextState.location.pathname
      }
    })
  }
}

// unauth
function requireNotAuth(nextState, replace) {
  if (store.getState().root.Profile.result) {
    replace({
      pathname: '/calendar'
    })
  }
}

// requirement
function requireCalendarEditId(nextState, replace) {
  if (!store.getState().root.Profile.result ||
    !store.getState().root.Profile.calendarEdit.id) {
    replace({
      pathname: '/calendar'
    })
  }
}

function requireEventNewCalendarId(nextState, replace) {
  if (!store.getState().root.Profile.result ||
    !store.getState().root.Profile.eventNew.calendar) {
    replace({
      pathname: '/calendar'
    })
  }
}

function requireCalendarPicker(nextState, replace) {
  if (!store.getState().root.Profile.result ||
    !nextState.location.query.calendar ||
    !nextState.location.query.path) {
    replace({
      pathname: '/calendar'
    })
  }
}

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Calendar} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/profile' component={Profile} onEnter={requireAuth}/>
      <Route path='/profile/calendar' component={ProfileCalendar} onEnter={requireAuth} />
      <Route path='/profile/calendar/new' component={ProfileCalendarNew} onEnter={requireAuth} />
      <Route path='/profile/calendar/edit' component={ProfileCalendarEdit} onEnter={requireCalendarEditId} />
      <Route path='/profile/event/new' component={ProfileEventNew} onEnter={requireEventNewCalendarId} />
      <Route path='/profile/event/new/calendar' component={CalendarPicker} onEnter={requireCalendarPicker} />
      <Route path='/signin' component={SignIn} onEnter={requireNotAuth} />
      <Route path='/signup' component={SignUp} onEnter={requireNotAuth} />
    </Router>
  </Provider>,
  rootElement
)

fetchOriginState().then(json => {
  if (json.success) {
    store.dispatch(check(json.user))
  }
})
