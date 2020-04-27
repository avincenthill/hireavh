import "styles/index.css";
import "normalize.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useParams,
} from "react-router-dom";
import About from "components/About/About";
import Contact from "components/Contact/Contact";
import Form from "components/Form/Form";
import { NavList } from "components/Nav/Nav";
import NotFound from "components/NotFound/NotFound";
import Page from "components/Page/Page";
import Post from "components/Post/Post";
import ProjectList from "components/ProjectList/ProjectList";
import React from "react";
import Resume from "components/Resume/Resume";
import SortList from "components/SortList/SortList";
import content from "content/content";
import { lookupBlogFromUrl } from "content/blogs/blogs";
import utils from "utils/utils";

const VariableBlogPost = () => {
  const { path } = useParams();
  const blog = lookupBlogFromUrl(path);
  return blog ? <Post blog={blog}></Post> : <NotFound></NotFound>;
};

class App extends React.Component {
  constructor() {
    super();
    utils.renderTheme();
  }

  render() {
    return (
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
  }
}

export default App;
