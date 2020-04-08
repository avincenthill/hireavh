import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import About from "components/About/About";
import NotFound from "components/NotFound/NotFound";
import Resume from "components/Resume/Resume";
import Contact from "components/Contact/Contact";
import Blog from "components/Blog/Blog";
import Post from "components/Post/Post";
import { lookupBlogFromUrl } from "content/blogs/blogs";

const VariableBlogPost = () => {
  const { path } = useParams();
  const blog = lookupBlogFromUrl(path);
  return blog ? (<Post blog={blog}></Post>) : (<NotFound></NotFound>)
}

const createRoutes = () => (
  <Router>
    <Switch>
      <Route exact path={["/", "/about", "/home"]} component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/:path" children={<VariableBlogPost />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default createRoutes;
