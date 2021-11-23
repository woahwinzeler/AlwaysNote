import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import {loginUser, signupUser, clearSessionErrors} from '../../actions/session_actions';

const mSTP = ({errors}) => ({
  errors: errors,
  formType: 'signup'
})

const mDTP = dispatch => ({
  processAction: (user) => dispatch(signupUser(user)),
  login: (user) => dispatch(loginUser(user)), 
  clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(SessionForm)