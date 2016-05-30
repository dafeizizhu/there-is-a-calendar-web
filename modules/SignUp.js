import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import SignUp from '../components/SignUp'

import { fetchSignUp } from '../actions/SignUp'

class SignUpModule extends Component {
  handleBackClick() {
    hashHistory.goBack()
  }
  handleSubmit(name, password) {
    const { dispatch } = this.props
    dispatch(fetchSignUp(name, password))
  }
  render() {
    return (
      <SignUp {...this.props.root.SignUp} 
        onBackClick={this.handleBackClick.bind(this)}
        onSubmit={this.handleSubmit.bind(this)} />
    )
  }
}

export default connect(state => state)(SignUpModule)
