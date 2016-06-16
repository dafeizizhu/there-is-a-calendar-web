import { combineReducers } from 'redux'

import { REQUEST_SIGN_IN, RECIEVE_SIGN_IN } from '../../actions/SignIn'

function id(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      return action.calendar.id
    default:
      return state
  }
}

function name(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      return action.calendar.name
    default:
      return state
  }
}

function color(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      return action.calendar.color
    default:
      return state
  }
}

function events(state = [], action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
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
