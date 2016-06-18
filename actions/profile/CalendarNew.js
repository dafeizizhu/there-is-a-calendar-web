import querystring from 'querystring'
import fetch from 'isomorphic-fetch'

export const CHANGE_COLOR = 'CHANGE_COLOR'

export function changeColor(color) {
  return {
    type: CHANGE_COLOR,
    color
  }
}

export const BEGIN_CALENDAR_NEW = 'BEGIN_CALENDAR_NEW'

export function beginCalendarNew() {
  return {
    type: BEGIN_CALENDAR_NEW
  }
}

export const REQUEST_CALENDAR_NEW = 'REQUEST_CALENDAR_NEW'

export function requestCalendarNew(n, c) {
  return {
    type: REQUEST_CALENDAR_NEW,
    name: n,
    color: c
  }
}

export const RECIEVE_CALENDAR_NEW = 'RECIEVE_CALENDAR_NEW'

export function recieveCalendarNew(success, message, calendar) {
  return {
    type: RECIEVE_CALENDAR_NEW,
    success,
    message,
    calendar
  }
}

export function calendarNew(n, c) {
  return dispatch => {
    dispatch(requestCalendarNew(n, c))
    fetch('/api/private/profile/calendar', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        name: n,
        color: c
      })
    }).then(response => response.json()).then(json => {
      dispatch(recieveCalendarNew(json.success, json.message, json.calendar))
    }).catch(e => {
      dispatch(recieveCalendarNew(false, String(e)))
    })
  }
}

export function fetchCalendarNew(n, c) {
  return dispatch => dispatch(calendarNew(n, c))
}
