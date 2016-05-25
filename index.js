import React from 'react'
import { render } from 'react-dom'

import Splash from './modules/Splash'
import Calendar from './modules/Calendar'

const rootElement = document.createElement('div')
rootElement.id = 'root'
document.body.appendChild(rootElement)

import { Router, Route, hashHistory } from 'react-router'

// css reset
require('./styles/reset.css')
require('./styles/app.css')

render(
  <Router history={hashHistory}>
    <Route path='/' component={Splash} />
    <Route path='/calendar' component={Calendar} />
  </Router>,
  rootElement
)
