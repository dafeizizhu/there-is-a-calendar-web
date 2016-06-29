import { combineReducers } from 'redux'

import { BEGIN_EVENT_NEW } from '../../actions/profile/EventNew'

function title(state = '', action) {
  switch(action.type) {
    case BEGIN_EVENT_NEW:
      return action.event.title
    default:
      return state
  }
}

function location(state = '', action) {
  switch(action.type) {
    case BEGIN_EVENT_NEW:
      return action.event.location
    default:
      return state
  }
}

function begin(state = new Date(), action) {
  switch(action.type) {
    case BEGIN_EVENT_NEW:
      return action.event.begin
    default:
      return state
  }
}

function end(state = new Date(), action) {
  switch(action.type) {
    case BEGIN_EVENT_NEW:
      return action.event.end
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
  loading,
})

export default EventNew
