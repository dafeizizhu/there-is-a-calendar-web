export const CHANGE_CALENDAR = 'CHANGE_CALENDAR_EVENT_NEW'

export function changeCalendar(calendarId) {
  return {
    type: CHANGE_CALENDAR,
    calendarId
  }
}
