import { combineReducers } from 'redux'

import { REQUEST_SIGN_IN, RECIEVE_SIGN_IN } from '../actions/SignIn'

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

const Profile = combineReducers({
  avatar,
  name,
  id,
})

export default Profile
