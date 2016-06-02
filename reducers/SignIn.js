import { combineReducers } from 'redux'
import { REQUEST_SIGN_IN, RECIEVE_SIGN_IN } from '../actions/SignIn'

function success(state = false, action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      return action.success
    default:
      return state
  }
}

function message(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      return action.message
    default:
      return state
  }
}

function loading(state = false, action) {
  switch(action.type) {
    case REQUEST_SIGN_IN:
      return true
    case RECIEVE_SIGN_IN:
      return false
    default:
      return state
  }
}

const SignIn = combineReducers({
  success,
  message,
  loading
})

export default SignIn
