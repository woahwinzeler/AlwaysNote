import { connect } from 'react-redux';
import React from 'react';
import {loginUser, clearSessionErrors} from '../../actions/session_actions';
import SessionForm from './session_form';

//Dispatch: clearSessionErrors, loginUser 
//State: errors and form type 

const mSTP = ({errors}) => ({
  errors: errors,
  formType: 'login'
})

const mDTP = dispatch => ({
  clearErrors: () => dispatch(clearSessionErrors()),
  processAction: (user) => dispatch(loginUser(user)),
  login: (user) => dispatch(loginUser(user))
})

export default connect(mSTP, mDTP)(SessionForm)