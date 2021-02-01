import './Page.css';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Helmet } from 'react-helmet';
import React from 'react';
import lastGitHash from 'content/version/version.txt';
class Page extends React.Component {
  constructor() {
    super();
    document.title = 'avh' + location.pathname;

    // get last git hash from file in this directory
    this.state = { version: 'version not found' };
    fetch(lastGitHash)
      .then((r) => r.text())
      .then((text) => {
        this.setState({ version: text });
      });
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta
            name="version"
            content={this.state ? this.state.version : null}
          />
        </Helmet>
        <Header></Header>
        <div className="page-container">{this.props.children}</div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Page;
