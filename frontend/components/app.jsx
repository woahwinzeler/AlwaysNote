import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from './splash/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import login_form_container from "./user_auth/login_form_container";
import signup_form_container from "./user_auth/signup_form_container";
import Main from "./main";

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/signup" component={signup_form_container} />
      <AuthRoute path="/login" component={login_form_container} />
      <ProtectedRoute path="/home" component={Main}/>
      <Route exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;