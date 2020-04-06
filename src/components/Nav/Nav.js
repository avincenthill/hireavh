import React from "react";
import content from "../../content/content";
import { GoGrabber } from "react-icons/go";
import Link from "../Link/Link";
import { IconContext } from "react-icons";
import styleconfig from "../../styles/styleconfig";
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
          {content.nav.links.map((link, index) => {
            return (
              <Link
                key={index}
                title={link.title}
                path={`/${link.path}`}
              ></Link>
            );
          })}
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

export default Nav;
