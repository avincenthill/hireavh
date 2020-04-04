import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../components/App/App";
import NotFound from "../components/NotFound/NotFound";

const createRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default createRoutes;
