export const BEGIN_EVENT_NEW = 'BEGIN_EVENT_NEW'

export function beginEventNew(calendar) {
  return {
    type: BEGIN_EVENT_NEW,
    event: {
      title: '',
      location: '',
      begin: new Date(),
      end: new Date(),
      repeat: '',
      calendar,
      remark: ''
    }
  }
}

export const CHANGE_TITLE = 'CHANGE_TITLE_EVENT_NEW'

export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    title
  }
}

export const CHANGE_LOCATION = 'CHANGE_LOCATION_EVENT_NEW'

export function changeLocation(location) {
  return {
    type: CHANGE_LOCATION,
    location
  }
}

export const CHANGE_BEGIN = 'CHANGE_BEGIN_EVENT_NEW'

export function changeBegin(begin) {
  return {
    type: CHANGE_BEGIN,
    begin
  }
}

export const CHANGE_END = 'CHANGE_END_EVENT_NEW'

export function changeEnd(end) {
  return {
    type: CHANGE_END,
    end
  }
}
