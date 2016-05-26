import React, { Component } from 'react'
import { connect } from 'react-redux'

import Profile from '../components/Profile'

class ProfileModule extends Component {
  render() {
    return (
      <Profile {...this.props.root.Profile} />
    )
  }
}

export default connect(state => state)(ProfileModule)
