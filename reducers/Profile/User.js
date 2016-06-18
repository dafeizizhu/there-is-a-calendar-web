import { combineReducers } from 'redux'

import { REQUEST_SIGN_IN, RECIEVE_SIGN_IN } from '../../actions/SignIn'
import { RECIEVE_CALENDAR_NEW } from '../../actions/profile/CalendarNew'
import { RECIEVE_REMOVE_CALENDAR } from '../../actions/profile/Calendar'

function avatar(state = '', action) {
  return state
}

function name(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      if (action.user) {
        return action.user.name
      } else {
        return state
      }
    default:
      return state
  }
}

function id(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      if (action.user) {
        return action.user.id
      } else {
        return state
      }
    default:
      return state
  }
}

function calendars(state = [], action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      if (action.user) {
        return action.user.calendars
      } else {
        return state
      }
    case RECIEVE_CALENDAR_NEW:
      if (action.calendar) {
        return state.concat([action.calendar.id])
      } else {
        return state
      }
    case RECIEVE_REMOVE_CALENDAR:
      if (action.calendar) {
        const _state = state.concat()
        _state.splice(state.indexOf(action.calendar.id), 1)
        return _state
      } else {
        return state
      }
    default:
      return state
  }
}

const user = combineReducers({
  avatar,
  name,
  id,
  calendars
})

export default user
