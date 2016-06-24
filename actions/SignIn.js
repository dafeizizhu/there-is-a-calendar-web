import querystring from 'querystring'
import fetch from 'isomorphic-fetch'

export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN'
export const RECIEVE_SIGN_IN = 'RECIEVE_SIGN_IN'

export function requestSignIn(name, password) {
  return {
    type: REQUEST_SIGN_IN,
    name,
    password
  }
}

export function recieveSignIn(success, message, user) {
  return {
    type: RECIEVE_SIGN_IN,
    success,
    message,
    user
  }
}

export function signIn(name, password) {
  return dispatch => {
    dispatch(requestSignIn(name, password))
    fetch('/api/sign-in', {
      credentials: 'include',
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: querystring.stringify({
        name: name,
        password: password
      })
    })
    .then(response => response.json())
    .then(json => {
      dispatch(recieveSignIn(json.success, json.message, json.user))
    }).catch(err => {
      dispatch(recieveSignIn(false, String(err)))
    })
  }
}

export function fetchSignIn(name, password) {
  return dispatch => dispatch(signIn(name, password))
}

export const RESET_SIGN_IN = 'RESET_SIGN_IN'

export function resetSignIn() {
  return {
    type: RESET_SIGN_IN
  }
}
