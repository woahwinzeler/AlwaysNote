import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from './splash/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import Home from './home/home'
import login_form_container from "./user_auth/login_form_container";
import signup_form_container from "./user_auth/signup_form_container";

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/signup" component={signup_form_container} />
      <AuthRoute path="/login" component={login_form_container} />
      <ProtectedRoute path="/home" component={Home}/>
      <Route path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;