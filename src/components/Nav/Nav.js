import React from "react";
import content from "content/content";
import { GoGrabber } from "react-icons/go";
import Link from "components/Link/Link";
import { IconContext } from "react-icons";
import styleconfig from "styles/styleconfig";
import "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  createPath = (string) => {
    return this.removeEmojis(string).toLowerCase();
  };

  closeNav = () => {
    this.setState({ isExpanded: false });
  };

  toggleNav = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  handleClick = (e) => {
    this.toggleNav();
  };

  renderNotExpanded = () => {
    return (
      <div
        className={`nav-icon $
          this.props.isBottom ? "nav-icon-bottom" : "nav-icon-top"
        }`}
      >
        <IconContext.Provider value={{ style: styleconfig.icons.default }}>
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
            this.props.isBottom ? "nav-container-bottom" : "nav-container-top"
          }`}
        >
          <NavList></NavList>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={`nav ${this.props.isBottom ? "nav-bottom" : "nav-top"}`}>
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
            title={link.emoji + " " + link.path}
            path={`/${link.path}`}
          ></Link>
        );
        })
      }
    </div>
  )
}
}

export { Nav, NavList };
