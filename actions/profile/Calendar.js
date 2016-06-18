import querystring from 'querystring'
import fetch from 'isomorphic-fetch'

export const REQUEST_REMOVE_CALENDAR = 'REQUEST_REMOVE_CALENDAR'

export function requestRemoveCalendar(key) {
  return {
    type: REQUEST_REMOVE_CALENDAR,
    key
  }
}

export const RECIEVE_REMOVE_CALENDAR = 'RECIEVE_REMOVE_CALENDAR'

export function recieveRemoveCalendar(success, message, calendar) {
  return {
    type: RECIEVE_REMOVE_CALENDAR,
    success,
    message,
    calendar
  }
}

export function removeCalendar(key) {
  return dispatch => {
    dispatch(requestRemoveCalendar)
    fetch('/api/private/profile/calendar/' + key, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(response => response.json()).then(json => {
      dispatch(recieveRemoveCalendar(json.success, json.message, json.calendar))
    }).catch(function (err) {
      dispatch(recieveRemoveCalendar(false, String(err)))
    })
  }
}

export function fetchRemoveCalendar(key) {
  return dispatch => dispatch(removeCalendar(key))
}
