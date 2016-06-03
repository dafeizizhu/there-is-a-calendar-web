import querystring from 'querystring'
import fetch from 'isomorphic-fetch'

export const REQUEST_SIGN_UP = 'REQUEST_SIGN_UP'
export const RECIEVE_SIGN_UP = 'RECIEVE_SIGN_UP'
export const BEGIN_SIGN_UP = 'BEGIN_SIGN_UP'

export function requestSignUp(name, password) {
  return {
    type: REQUEST_SIGN_UP,
    name,
    password
  }
}

export function recieveSignUp(success, message) {
  return {
    type: RECIEVE_SIGN_UP,
    success,
    message
  }
}

export function signUp(name, password) {
  return dispatch => {
    dispatch(requestSignUp(name, password))
    fetch('/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        name: name,
        password: password
      })
    })
    .then(response => response.json())
    .then(json => dispatch(recieveSignUp(json.success, json.message)))
    .catch(err => dispatch(recieveSignUp(false, String(err))))
  }
}

export function fetchSignUp(name, password) {
  return dispatch => dispatch(signUp(name, password))
}

export function beginSignUp() {
  return {
    type: BEGIN_SIGN_UP
  }
}
