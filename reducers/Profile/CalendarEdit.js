import { combineReducers } from 'redux'
import {
  CHANGE_COLOR,
  CHANGE_NAME,
  BEGIN_CALENDAR_EDIT,
  REQUEST_CALENDAR_EDIT,
  RECIEVE_CALENDAR_EDIT,
  RESET_CALENDAR_EDIT
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
  switch(action.type) {
    case RECIEVE_CALENDAR_EDIT:
      return action.success
    case BEGIN_CALENDAR_EDIT:
    case RESET_CALENDAR_EDIT:
      return false
    default:
      return state
  }
}

function message(state = '', action) {
  switch(action.type) {
    case RECIEVE_CALENDAR_EDIT:
      return action.message
    case BEGIN_CALENDAR_EDIT:
    case RESET_CALENDAR_EDIT:
      return ''
    default:
      return state
  }
}

function loading(state = false, action) {
  switch(action.type) {
    case REQUEST_CALENDAR_EDIT:
      return true
    case RECIEVE_CALENDAR_EDIT:
    case BEGIN_CALENDAR_EDIT:
    case RESET_CALENDAR_EDIT:
      return false
    default:
      return state
  }
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
