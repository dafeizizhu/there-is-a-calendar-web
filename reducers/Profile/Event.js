
import { combineReducers } from 'redux'

import { REQUEST_SIGN_IN, RECIEVE_SIGN_IN } from '../../actions/SignIn'
import { CHECK } from '../../actions/Check'

function id(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
    case CHECK:
      return action.event.id
    default:
      return state
  }
}

function title(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
    case CHECK:
      return action.event.title
    default:
      return state
  }
}

function location(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
    case CHECK:
      return action.event.location
    default:
      return state
  }
}

function begin(state = 0, action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
    case CHECK:
      return action.event.begin
    default:
      return state
  }
}

function end(state = 0, action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
    case CHECK:
      return action.event.end
    default:
      return state
  }
}

function remark(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
    case CHECK:
      return action.event.remark
    default:
      return state
  }
}

function repeat(state = false, action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
    case CHECK:
      return action.event.repeat
    default:
      return state
  }
}

const event = combineReducers({
  id,
  title,
  location,
  begin,
  end,
  remark,
  repeat
})

export default event
