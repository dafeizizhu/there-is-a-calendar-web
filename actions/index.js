export const SET_CURRENT = 'SET_CURRENT'

export function setCurrent(date) {
  return {
    type: SET_CURRENT,
    date
  }
}

export const SET_ROUTE = 'SET_ROUTE'

export const ROUTES = {
  CALENDAR: 'CALENDAR',
  SPLASH: 'SPLASH'
}

export function setRoute(route) {
  return {
    type: SET_ROUTE,
    route
  }
}
