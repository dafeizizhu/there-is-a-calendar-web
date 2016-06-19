import { combineReducers } from 'redux'

import {
  CHANGE_COLOR,
  CHANGE_NAME,
  BEGIN_CALENDAR_NEW,
  REQUEST_CALENDAR_NEW,
  RECIEVE_CALENDAR_NEW
} from '../../actions/profile/CalendarNew'

function name(state = '', action) {
  switch(action.type) {
    case BEGIN_CALENDAR_NEW:
      return ''
    case CHANGE_NAME:
      return action.name
    default:
      return state
  }
}

function color(state = 'red', action) {
  switch(action.type) {
    case CHANGE_COLOR:
      return action.color
    case BEGIN_CALENDAR_NEW:
      return 'red'
    default:
      return state
  }
}

function success(state = false, action) {
  switch(action.type) {
    case RECIEVE_CALENDAR_NEW:
      return action.success
    case BEGIN_CALENDAR_NEW:
      return false
    default:
      return state
  }
}

function message(state = '', action) {
  switch(action.type) {
    case RECIEVE_CALENDAR_NEW:
      return action.message
    case BEGIN_CALENDAR_NEW:
      return ''
    default:
      return state
  }
}

function loading(state = false, action) {
  switch(action.type) {
    case REQUEST_CALENDAR_NEW:
      return true
    case RECIEVE_CALENDAR_NEW:
      return false
    case BEGIN_CALENDAR_NEW:
      return false
    default:
      return state
  }
}

const CalendarNew = combineReducers({
  name,
  color,
  success,
  message,
  loading
})

export default CalendarNew 
