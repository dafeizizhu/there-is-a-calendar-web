export const SET_DATE = 'SET_DATE'

export function setDate(date) {
  return {
    type: SET_DATE,
    date
  }
}

export const SET_TYPE = 'SET_TYPE'

export function setType(ctype) {
  return {
    type: SET_TYPE,
    ctype
  }
}
