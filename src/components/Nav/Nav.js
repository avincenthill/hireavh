import './Nav.css';
import { GoGrabber } from 'react-icons/go';
import { IconContext } from 'react-icons';
import Link from 'components/Link/Link';
import React from 'react';
import content from 'content/content';
import styleconfig from 'styles/styleconfig';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  handleClick = (e) => {
    if (!this.state.isExpanded) {
      document.addEventListener('click', this.handleClick, false);
    } else {
      document.removeEventListener('click', this.handleClick, false);
    }
    this.toggleNav();
  };

  toggleNav = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  renderNotExpanded = () => {
    return (
      <div
        className={`nav-icon $
          this.props.isBottom ? "nav-icon-bottom" : "nav-icon-top"
        }`}
      >
        <IconContext.Provider
          value={{
            style: { ...styleconfig.icons.l, ...styleconfig.icons.nav },
          }}
        >
          <GoGrabber onClick={this.handleClick} />
        </IconContext.Provider>
      </div>
    );
  };

  renderExpanded = () => {
    return (
      <div>
        <div
          className={`nav-container ${
            this.props.isBottom ? 'nav-container-bottom' : 'nav-container-top'
          }`}
        >
          <NavList></NavList>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={`nav ${this.props.isBottom ? 'nav-bottom' : 'nav-top'}`}>
        {this.state.isExpanded
          ? this.renderExpanded()
          : this.renderNotExpanded()}
      </div>
    );
  }
}

class NavList extends React.Component {
  render() {
    return (
      <div className="nav-list">
        {Object.keys(content.nav.links).map((key, index) => {
          let link = content.nav.links[key];
          return (
            <Link
              key={index}
              title={link.emoji + ' ' + link.path}
              path={`/${link.path}`}
            ></Link>
          );
        })}
      </div>
    );
  }
}

export { Nav, NavList };
