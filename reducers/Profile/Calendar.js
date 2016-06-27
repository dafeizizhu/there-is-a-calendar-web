import { combineReducers } from 'redux'

import { REQUEST_SIGN_IN, RECIEVE_SIGN_IN } from '../../actions/SignIn'
import { CHECK } from '../../actions/Check'
import { RECIEVE_CALENDAR_NEW } from '../../actions/profile/CalendarNew'
import { RECIEVE_CALENDAR_EDIT } from '../../actions/profile/CalendarEdit'

function id(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
    case CHECK:
    case RECIEVE_CALENDAR_NEW:
    case RECIEVE_CALENDAR_EDIT:
      return action.calendar.id
    default:
      return state
  }
}

function name(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
    case CHECK:
    case RECIEVE_CALENDAR_NEW:
    case RECIEVE_CALENDAR_EDIT:
      return action.calendar.name
    default:
      return state
  }
}

function color(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
    case CHECK:
    case RECIEVE_CALENDAR_NEW:
    case RECIEVE_CALENDAR_EDIT:
      return action.calendar.color
    default:
      return state
  }
}

function events(state = [], action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
    case CHECK:
      return action.calendar.events
    default:
      return state
  }
}

const calendar = combineReducers({
  id,
  name,
  color,
  events
})

export default calendar
