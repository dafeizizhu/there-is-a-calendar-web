import { combineReducers } from 'redux'

import Calendar from './Calendar'
import Profile from './Profile'
import SignUp from './SignUp'
import SignIn from './SignIn'

export default combineReducers({
  Calendar,
  Profile,
  SignUp,
  SignIn
})
