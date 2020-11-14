import 'styles/index.css';
import 'normalize.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from 'components/About/About';
import Contact from 'components/Contact/Contact';
import Form from 'components/Form/Form';
import { NavList } from 'components/Nav/Nav';
import NotFound from 'components/NotFound/NotFound';
import Page from 'components/Page/Page';
import ProjectList from 'components/ProjectList/ProjectList';
import React from 'react';
import Resume from 'components/Resume/Resume';
import SortList from 'components/SortList/SortList';
import Todo from 'components/Todo/Todo';
import VariableBlogPost from 'components/Post/VariableBlogPost';
import content from 'content/content';
import utils from 'utils/utils';

class App extends React.Component {
  constructor() {
    super();
    utils.renderTheme();
  }

  render() {
    return (
      <Router>
        <Switch>
          {/* /about */}
          <Route exact path={'/'} component={About} />
          <Route exact path={'/home'} component={About} />
          <Route exact path={'/about'} component={About} />

          {/* /resume */}
          <Route exact path="/resume" component={Resume} />

          {/* /contact */}
          <Route exact path="/contact" component={Contact} />

          {/* /sorting-algorithms */}
          <Route exact path="/sorting-algorithms" component={SortList} />

          {/* /blog and /blog/* */}
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
          <Route exact path="/blog/:path" children={<VariableBlogPost />} />

          {/* /projects */}
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

          {/* /graphic-design */}
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

          {/* /dynamic-form */}
          <Route exact path="/dynamic-form" component={Form} />

          {/* /todo */}
          <Route exact path="/todo" component={Todo} />

          {/* /404 */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
