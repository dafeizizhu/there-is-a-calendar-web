import { combineReducers } from 'redux'

import { REQUEST_SIGN_IN, RECIEVE_SIGN_IN } from '../actions/SignIn'

function avatar(state = '', action) {
  return state
}

function name(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      return action.name
    default:
      return state
  }
}

function id(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      return action.id
    default:
      return state
  }
}

function loading(state = false, action) {
  switch(action.type) {
    case REQUEST_SIGN_IN:
      return true
    case RECIEVE_SIGN_IN:
      return false;
    default:
      return false;
  }
}

const Profile = combineReducers({
  avatar,
  name,
  id,
  loading
})

export default Profile
