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
  componentWillUpdate(nextProps) {
    const { id } = nextProps.root.Profile
    if (id) {
      hashHistory.push('/calendar')
    }
  }
  render() {
    return (
      <SignIn id={this.props.root.Profile.id}
        onBack={this.handleBack.bind(this)}
        onSubmit={this.handleSubmit.bind(this)} />
    )
  }
}

export default connect(state => state)(SignInModule)
