import { combineReducers } from 'redux'

import { CHANGE_COLOR } from '../../actions/profile/CalendarNew'

function name(state = '', action) {
  return state
}

function color(state = 'red', action) {
  switch(action.type) {
    case CHANGE_COLOR:
      return action.color
    default:
      return state
  }
}

const CalendarNew = combineReducers({
  name,
  color 
})

export default CalendarNew 
