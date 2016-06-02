import { combineReducers } from 'redux'

import { REQUEST_SIGN_IN, RECIEVE_SIGN_IN } from '../actions/SignIn'

function avatar(state = '', action) {
  return state
}

function name(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      return action.user.name
    default:
      return state
  }
}

function id(state = '', action) {
  switch(action.type) {
    case RECIEVE_SIGN_IN:
      return action.user.id
    default:
      return state
  }
}

const Profile = combineReducers({
  avatar,
  name,
  id,
})

export default Profile
