import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../components/About/About";
import NotFound from "../components/NotFound/NotFound";
import Resume from "../components/Resume/Resume";
import Contact from "../components/Contact/Contact";

const createRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default createRoutes;
