import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Link } from 'react-router-dom';
import { withRouter } from "react-router";

const Auth = ({ path, loggedIn, component: Component}) => {
  // console.log(loggedIn, 'auth')
  return (<Route path={path} render={(props) => loggedIn ? <Redirect to ="/home" /> : <Component {...props} /> } />)
}

const Protected = ({ path, loggedIn, component: Component}) => {
  // console.log(loggedIn,'Protected')
  return (<Route path={path} render={(props) => loggedIn ? <Component {...props} /> : <Redirect to ="/" />} />)
}

const mSTP = state => {
  let loggedIn = Boolean(state.sessions.CurrentUserId)
  return {
    loggedIn
  }
}
      
export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));