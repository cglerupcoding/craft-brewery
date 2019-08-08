

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
// pages
import NucleoIcons from "views/NucleoIcons.js";
import Error422 from "views/examples/Error422.js";
import Error500 from "views/examples/Error500.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Settings from "views/examples/Settings";
import MapScreen from "views/components/map.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route path="/error-422" render={props => <Error422 {...props} />} />
      <Route path="/error-500" render={props => <Error500 {...props} />} />
      <Route path="/map" render={props => <MapScreen {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route path="/login-page" render={props => <LoginPage {...props} />} />
      <Route path="/settings" render={props => <Settings {...props} />} />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Redirect to="/landing-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
