import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import SignIn from '../components/SignIn'
import { fetchSignIn } from '../actions/SignIn'
import { beginSignUp } from '../actions/SignUp'

class SignInModule extends Component {
  handleBack() {
    hashHistory.goBack()
  }
  handleSubmit(name, password) {
    const { dispatch } = this.props
    dispatch(fetchSignIn(name, password))
  }
  handleSignUpClick() {
    const { dispatch } = this.props
    dispatch(beginSignUp())
    hashHistory.push('/signup') 
  }
  componentWillUpdate(nextProps) {
    const { result } = nextProps.root.Profile
    if (result) {
      hashHistory.push('/calendar')
    }
  }
  render() {
    const { result } = this.props.root.Profile
    return (
      <SignIn id={result} {...this.props.root.SignIn} 
        onBack={this.handleBack.bind(this)}
        onSubmit={this.handleSubmit.bind(this)}
        onSignUpClick={this.handleSignUpClick.bind(this)} />
    )
  }
}

export default connect(state => state)(SignInModule)
