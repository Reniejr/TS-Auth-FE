import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

//PERSONAL COMPONENTS IMPORTS
import LoginPage from "../../_Pages/0.LoginPage/LoginPage";

export default function RouterWeb() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}
