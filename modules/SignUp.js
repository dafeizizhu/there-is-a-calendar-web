import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import SignUp from '../components/SignUp'

import { fetchSignUp, resetSignUp } from '../actions/SignUp'

class SignUpModule extends Component {
  handleBackClick() {
    hashHistory.goBack()
  }
  handleSubmit(name, password) {
    const { dispatch } = this.props
    dispatch(fetchSignUp(name, password))
  }
  handleAlertOK() {
    const { dispatch } = this.props
    const { success } = this.props.root.SignUp
    if (success) {
      hashHistory.push('/signin')
    } else {
      dispatch(resetSignUp())
    }
  }
  render() {
    return (
      <SignUp {...this.props.root.SignUp} 
        onBackClick={this.handleBackClick.bind(this)}
        onSubmit={this.handleSubmit.bind(this)}
        onAlertOK={this.handleAlertOK.bind(this)} />
    )
  }
}

export default connect(state => state)(SignUpModule)
