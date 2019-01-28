// common components
import React from "react";

// routing components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// custom views
import AboutView from "../../views/App/views/Statics/AboutView";
import HomeView from "../../views/App/views/Statics/HomeView";
import NotFoundView from "../../views/App/views/Statics/NotFoundView";

import SignUpView from "../../views/App/views/SignUp/SignUpView";

import Navigation from "../../views/App/components/Navigation";
import { ROUTES } from "../../global/ROUTES";

const NewApp = () => (
  <Router>
    <div className="div-app">
      <div className="div-header">
        <Navigation />
      </div>

      <div id="div-container" className="div-container">
        <Switch>
          <Route exact path={ROUTES.LANDING} component={AboutView} />

          <Route exact path={ROUTES.SIGN_UP} component={SignUpView} />
          <Route exact path={ROUTES.HOME} component={AboutView} />
          <Route exact path={ROUTES.ABOUT} component={HomeView} />
          <Route exact path={ROUTES.FORGET_PWD} component={HomeView} />

          <Route component={NotFoundView} />
        </Switch>
      </div>

      <div className="div-footer">
        {" "}
        <small>
          &copy; Sample created on <b>2018</b> by <b>_ARCHER_</b>
        </small>
      </div>
    </div>
  </Router>
);

export default NewApp;
