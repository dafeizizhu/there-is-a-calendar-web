import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import Splash from '../components/Splash'

class SplashModule extends Component {
  render() {
    setTimeout(function () {
      hashHistory.push('/calendar')
    }, 5000)
    return <Splash />
  }
}

export default SplashModule
