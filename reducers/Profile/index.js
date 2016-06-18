import { combineReducers } from 'redux'

import { REQUEST_SIGN_IN, RECIEVE_SIGN_IN } from '../../actions/SignIn'
import { RECIEVE_CALENDAR_NEW } from '../../actions/profile/CalendarNew'
import { RECIEVE_REMOVE_CALENDAR } from '../../actions/profile/Calendar'

import user from './User'
import calendar from './Calendar'
import event from './Event'
import calendarNew from './CalendarNew'

function result(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      if (action.user) {
        return action.user.result
      } else {
        return state
      }
    default:
      return state
  }
}

function users(state = {}, action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      if (action.user) {
        return Object.assign({}, state, {
          [action.user.result]: user(state[action.user.result], {
            type: action.type,
            user: action.user.entities.users[action.user.result]
          })
        })
      } else {
        return state
      }
    case RECIEVE_CALENDAR_NEW:
    case RECIEVE_REMOVE_CALENDAR:
      if (action.calendar) {
        return Object.assign({}, state, {
          [action.calendar.user]: user(state[action.calendar.user], action)
        })
      } else {
        return state
      }
    default:
      return state
  }
}

function calendars(state = {}, action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      if (action.user) {
        var calendarIds = action.user.entities.users[action.user.result].calendars
        var _calendars = {}
        calendarIds.forEach(function (calendarId) {
          Object.assign(_calendars, {
            [calendarId]: calendar(state[calendarId], {
              type: action.type,
              calendar: action.user.entities.calendars[calendarId]
            })
          })
        })
        return _calendars
      } else {
        return state
      }
    case RECIEVE_CALENDAR_NEW:
      if (action.calendar) {
        return Object.assign({}, state, {
          [action.calendar.id]: {
            color: action.calendar.color,
            events: [],
            id: action.calendar.id,
            name: action.calendar.name
          }
        })
      } else {
        return state
      }
    default:
      return state
  }
}

function events(state = {}, action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      if (action.user) {
        var _events = {}
        var eventIds = []
        var calendarIds = action.user.entities.users[action.user.result].calendars
        calendarIds.forEach(function (calendarId) {
          eventIds = eventIds.concat(action.user.entities.calendars[calendarId].events)
        })
        eventIds.forEach(function (eventId) {
          Object.assign(_events, {
            [eventId]: event(state[eventId], {
              type: action.type,
              event: action.user.entities.events[eventId]
            })
          })
        })
        return _events
      } else {
        return state
      }
    default:
      return state
  }
}
        
const entities = combineReducers({
  users,
  calendars,
  events
})

const Profile = combineReducers({
  result,
  entities,
  calendarNew
})

export default Profile
