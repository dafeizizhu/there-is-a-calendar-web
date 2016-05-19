import { combineReducers } from 'redux'
import { SET_CURRENT, SET_ROUTE, ROUTES } from '../actions'

const { CALENDAR, SPLASH } = ROUTES

function currentDate(state = new Date(), action) {
  switch(action.type) {
    case SET_CURRENT:
      return action.date
    default:
      return state
  }
}

function route(state = SPLASH, action) {
  switch(action.type) {
    case SET_ROUTE:
      return action.route
    default:
      return state
  }
}

const calendarApp = combineReducers({
  currentDate,
  route
})

export default calendarApp
