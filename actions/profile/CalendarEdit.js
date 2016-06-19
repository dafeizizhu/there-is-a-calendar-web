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
export const RECIEVE_CALENDAR_EDIT = 'RECIEVE_CALENDAR_EDIT'
