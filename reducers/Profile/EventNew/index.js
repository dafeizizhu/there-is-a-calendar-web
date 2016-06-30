import { combineReducers } from 'redux'

import { 
  BEGIN_EVENT_NEW,
  CHANGE_TITLE,
  CHANGE_LOCATION,
  CHANGE_BEGIN,
  CHANGE_END
} from '../../../actions/profile/EventNew'
import { CHANGE_CALENDAR } from '../../../actions/profile/eventNew/CalendarPicker'

function title(state = '', action) {
  switch(action.type) {
    case BEGIN_EVENT_NEW:
      return action.event.title
    case CHANGE_TITLE:
      return action.title
    default:
      return state
  }
}

function location(state = '', action) {
  switch(action.type) {
    case BEGIN_EVENT_NEW:
      return action.event.location
    case CHANGE_LOCATION:
      return action.location
    default:
      return state
  }
}

function begin(state = new Date(), action) {
  switch(action.type) {
    case BEGIN_EVENT_NEW:
      return action.event.begin
    case CHANGE_BEGIN:
      return action.begin
    default:
      return state
  }
}

function end(state = new Date(), action) {
  switch(action.type) {
    case BEGIN_EVENT_NEW:
      return action.event.end
    case CHANGE_END:
      return action.end
    default:
      return state
  }
}

function repeat(state = '', action) {
  switch(action.type) {
    case BEGIN_EVENT_NEW:
      return action.event.repeat
    default:
      return state
  }
}

function calendar(state = '', action) {
  switch(action.type) {
    case BEGIN_EVENT_NEW:
      return action.event.calendar
    case CHANGE_CALENDAR:
      return action.calendarId
    default:
      return state
  }
}

function remark(state = '', action) {
  switch(action.type) {
    case BEGIN_EVENT_NEW:
      return action.event.remark
    default:
      return state
  }
}

function success(state = false, action) {
  return state
}

function message(state = '', action) {
  return state
}

function loading(state = '', action) {
  return state
}

const EventNew = combineReducers({
  title,
  location,
  begin,
  end,
  repeat,
  calendar,
  remark,
  success,
  message,
  loading
})

export default EventNew
