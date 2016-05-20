import React from 'react'
import { render } from 'react-dom'

import Splash from './modules/Splash'
import Calendar from './modules/Calendar'

let rootElement = document.createElement('div')
document.body.appendChild(rootElement)

import { Router, Route, hashHistory } from 'react-router'

render(
  <Router history={hashHistory}>
    <Route path='/' component={Splash} />
    <Route path='/calendar' component={Calendar} />
  </Router>,
  rootElement
)
