import { combineReducers } from 'redux'

function avatar(state = '', action) {
  return state
}

function name(state = '', action) {
  return state
}

function id(state = '', action) {
  return state
}

const ProfileApp = combineReducers({
  avatar,
  name,
  id
})

export default ProfileApp
