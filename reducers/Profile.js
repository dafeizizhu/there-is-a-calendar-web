import { combineReducers } from 'redux'

import { RECIEVE_SIGN_IN } from '../actions/SignIn'

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

const ProfileApp = combineReducers({
  avatar,
  name,
  id
})

export default ProfileApp
