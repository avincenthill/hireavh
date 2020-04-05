import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../components/About/About";
import NotFound from "../components/NotFound/NotFound";

const createRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default createRoutes;
