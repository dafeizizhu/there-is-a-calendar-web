import querystring from 'querystring'
import fetch from 'isomorphic-fetch'

export const BEGIN_CALENDAR_EDIT = 'BEGIN_CALENDAR_EDIT'

export function beginCalendarEdit(calendar) {
  return {
    type: BEGIN_CALENDAR_EDIT,
    calendar
  }
}

export const CHANGE_COLOR = 'CHANGE_COLOR_EDIT'

export function changeColor(color) {
  return {
    type: CHANGE_COLOR,
    color
  }
}

export const CHANGE_NAME = 'CHANGE_NAME_EDIT'

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name
  }
}

export const REQUEST_CALENDAR_EDIT = 'REQUEST_CALENDAR_EDIT'

export function requestCalendarEdit(id, name, color) {
  return {
    type: REQUEST_CALENDAR_EDIT,
    id,
    name,
    color
  }
}

export const RECIEVE_CALENDAR_EDIT = 'RECIEVE_CALENDAR_EDIT'

export function recieveCalendarEdit(success, message, calendar) {
  return {
    type: RECIEVE_CALENDAR_EDIT,
    success,
    message,
    calendar
  }
}

export function calendarEdit(id, name, color) {
  return dispatch => {
    dispatch(requestCalendarEdit(id, name, color))
    fetch('/api/private/profile/calendar/' + id, {
      credentials: 'include',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        name,
        color
      })
    }).then(response => response.json()).then(json => {
      dispatch(recieveCalendarEdit(json.success, json.message, json.calendar))
    }).catch(e => {
      dispatch(recieveCalendarEdit(false, String(e)))
    })
  }
}

export function fetchCalendarEdit(id, name, color) {
  return dispatch => dispatch(calendarEdit(id, name, color))
}
