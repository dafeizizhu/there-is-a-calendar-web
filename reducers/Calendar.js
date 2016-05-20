import { combineReducers } from 'redux'
import { SET_CURRENT } from '../actions/Calendar'

function currentDate(state = new Date(), action) {
  switch(action.type) {
    case SET_CURRENT:
      return action.date
    default:
      return state
  }
}

const calendarApp = combineReducers({
  currentDate
})

export default calendarApp
