import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import About from "components/About/About";
import NotFound from "components/NotFound/NotFound";
import Resume from "components/Resume/Resume";
import Contact from "components/Contact/Contact";
import Post from "components/Post/Post";
import SortList from "components/SortList/SortList";
import Form from "components/Form/Form";
import Page from "components/Page/Page";
import { NavList } from "components/Nav/Nav";
import ProjectList from "components/ProjectList/ProjectList";
import { lookupBlogFromUrl } from "content/blogs/blogs";
import content from "content/content";

const VariableBlogPost = () => {
  const { path } = useParams();
  const blog = lookupBlogFromUrl(path);
  return blog ? <Post blog={blog}></Post> : <NotFound></NotFound>;
};

const createRoutes = () => (
  <Router>
    <Switch>
      <Route exact path={["/", "/about", "/home"]} component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/blog/:path" children={<VariableBlogPost />} />
      <Route exact path="/sorting-algorithms" component={SortList} />
      <Route
        exact
        path="/blog"
        render={() => (
          <Page>
            <ProjectList
              projects={content.blogs.data}
              title={content.blogs.title}
            />
            <NavList></NavList>
            <hr></hr>
          </Page>
        )}
      />
      <Route
        exact
        path="/projects"
        render={() => (
          <Page>
            <ProjectList
              projects={content.projects.data}
              title={content.projects.title}
            />
            <NavList></NavList>
            <hr></hr>
          </Page>
        )}
      />
      <Route
        exact
        path="/graphic-design"
        render={() => (
          <Page>
            <ProjectList
              projects={content.projects.graphicDesign.data}
              title={content.projects.graphicDesign.title}
            />
            <NavList></NavList>
            <hr></hr>
          </Page>
        )}
      />
      <Route exact path="/dynamic-form" component={Form} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default createRoutes;
