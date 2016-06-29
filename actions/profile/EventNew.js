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
