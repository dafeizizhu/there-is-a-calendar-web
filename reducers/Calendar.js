import { combineReducers } from 'redux'
import { SET_DATE, SET_TYPE } from '../actions/Calendar'

function date(state = new Date(), action) {
  switch(action.type) {
    case SET_DATE:
      return action.date
    default:
      return state
  }
}

function type(state = 'year', action) {
  switch(action.type) {
    case SET_TYPE:
      return action.ctype
    default:
      return state
  }
}

const calendarApp = combineReducers({
  date,
  type
})

export default calendarApp
