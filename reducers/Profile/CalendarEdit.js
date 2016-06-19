import { combineReducers } from 'redux'
import {
  CHANGE_COLOR,
  CHANGE_NAME,
  BEGIN_CALENDAR_EDIT,
  REQUEST_CALENDAR_EDIT,
  RECIEVE_CALENDAR_EDIT
} from '../../actions/profile/CalendarEdit'

function id(state = '', action) {
  switch(action.type) {
    case BEGIN_CALENDAR_EDIT:
      return action.calendar.id
    default:
      return state
  }
}

function name(state = '', action) {
  switch(action.type) {
    case BEGIN_CALENDAR_EDIT:
      return action.calendar.name
    case CHANGE_NAME:
      return action.name
    default:
      return state
  }
}

function color(state = '', action) {
  switch(action.type) {
    case BEGIN_CALENDAR_EDIT:
      return action.calendar.color
    case CHANGE_COLOR:
      return action.color
    default:
      return state
  }
}

function success(state = false, action) {
  return state
}

function message(state = '', action) {
  return state
}

function loading(state = false, action) {
  return state
}

const calendarEdit = combineReducers({
  id,
  name,
  color,
  success,
  message,
  loading
})

export default calendarEdit
