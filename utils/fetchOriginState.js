import querystring from 'querystring'
import fetch from 'isomorphic-fetch'

export default function fetchOriginState() {
  return fetch('/api/check', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application-x-www-form-urlencoded'
    }
  }).then(response => response.json())
}
