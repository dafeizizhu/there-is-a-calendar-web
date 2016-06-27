export const CHECK = 'CHECK'

export function check(user) {
  return {
    type: CHECK,
    user
  }
}
