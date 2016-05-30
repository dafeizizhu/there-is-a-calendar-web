export const REQUEST_SIGN_UP = 'REQUEST_SIGN_UP'
export const RECIEVE_SIGN_UP = 'RECIEVE_SIGN_UP'

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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          success: false,
          message: '创建失败'
        })
      }, 2000)
    }).then(json => dispatch(recieveSignUp(json.success, json.message)))
  }
}

export function fetchSignUp(name, password) {
  return dispatch => dispatch(signUp(name, password))
}
