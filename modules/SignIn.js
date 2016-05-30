import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import SignIn from '../components/SignIn'
import { fetchSignIn } from '../actions/SignIn'

class SignInModule extends Component {
  handleBack() {
    hashHistory.goBack()
  }
  handleSubmit(name, password) {
    const { dispatch } = this.props
    dispatch(fetchSignIn(name, password))
  }
  handleSignUpClick() {
    hashHistory.push('/signup') 
  }
  componentWillUpdate(nextProps) {
    const { id } = nextProps.root.Profile
    if (id) {
      hashHistory.push('/calendar')
    }
  }
  render() {
    const { id, loading } = this.props.root.Profile
    return (
      <SignIn id={id} loading={loading}
        onBack={this.handleBack.bind(this)}
        onSubmit={this.handleSubmit.bind(this)}
        onSignUpClick={this.handleSignUpClick.bind(this)} />
    )
  }
}

export default connect(state => state)(SignInModule)
