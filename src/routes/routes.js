import 'styles/index.css';
import 'normalize.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from 'components/About/About';
import Breakout from 'components/Breakout/Breakout';
import Contact from 'components/Contact/Contact';
import Form from 'components/Form/Form';
import { NavList } from 'components/Nav/Nav';
import NotFound from 'components/NotFound/NotFound';
import Page from 'components/Page/Page';
import Pomodoro from 'components/Pomodoro/Pomodoro';
import ProjectList from 'components/ProjectList/ProjectList';
import React from 'react';
import Resume from 'components/Resume/Resume';
import SortList from 'components/SortList/SortList';
import Todo from 'components/Todo/Todo';
import VariableBlogPost from 'components/Post/VariableBlogPost';
import YouTube from 'components/YouTube/YouTube';
// import _Default from 'components/_Default/_Default';
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
          {/* TBD: enable to see changes to the _Default template page here: http://localhost:3000/default */}
          {/* default */}
          {/* <Route exact path={'/default'} component={_Default} /> */}

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

          {/* /breakout */}
          <Route exact path="/breakout" component={Breakout} />

          {/* /youtube */}
          <Route exact path="/youtube" component={YouTube} />

          {/* /pomodoro timer */}
          <Route exact path="/pomodoro" component={Pomodoro} />

          {/* /404 */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
