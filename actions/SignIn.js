export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN'
export const RECIEVE_SIGN_IN = 'RECIEVE_SIGN_IN'

export function requestSignIn(name, password) {
  return {
    type: REQUEST_SIGN_IN,
    name,
    password
  }
}

export function recieveSignIn(id, name) {
  return {
    type: RECIEVE_SIGN_IN,
    id,
    name
  }
}

export function signIn(name, password) {
  return dispatch => {
    dispatch(requestSignIn(name, password))
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: 'mockUser'
        })
      }, 2000)
    }).then(json => dispatch(recieveSignIn(json.id, json.name)))
  }
}

export function fetchSignIn(name, password) {
  return dispatch => dispatch(signIn(name, password))
}
