import { combineReducers } from 'redux'
import { REQUEST_SIGN_UP, RECIEVE_SIGN_UP } from '../actions/SignUp'

function success(state = false, action) {
  switch(action.type) {
    case RECIEVE_SIGN_UP:
      return action.success
    default:
      return state
  }
}

function message(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_UP:
      return action.message
    default:
      return state
  }
}

function loading(state = false, action) {
  switch(action.type) {
    case REQUEST_SIGN_UP:
      return true
    case RECIEVE_SIGN_UP:
      return false
    default:
      return state
  }
}

const SignUp = combineReducers({
  success,
  message,
  loading
})

export default SignUp
