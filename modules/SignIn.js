import React, { Component } from 'react'
import { connect } from 'react-redux'

import SignIn from '../components/SignIn'

class SignInModule extends Component {
  render() {
    return (
      <SignIn />
    )
  }
}

export default connect(state => state)(SignInModule)
