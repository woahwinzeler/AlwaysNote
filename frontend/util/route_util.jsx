import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Link } from 'react-router-dom';
import { withRouter } from "react-router";

const Auth = ({ path, loggedIn, component: Component}) => (
  <Route path={path} render={(props) => loggedIn ? <Redirect to ="/notes" /> : <Component {...props} /> } />
)

const Protected = ({ path, loggedIn, component: Component}) => (
  <Route path={path} render={(props) => loggedIn ? <Component {...props} /> : <Redirect to ="/" />} />
)

const mSTP = state => {
  let loggedIn; 
  if (typeof state.session === 'undefined'){
    loggedIn = false;
  } else { 
    loggedIn = true; 
  }
  return {
    loggedIn
  }
}
      
export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));