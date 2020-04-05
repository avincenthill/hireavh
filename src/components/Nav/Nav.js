import React from "react";
import content from "../../content/content.json";
import { GoGrabber, GoChevronDown } from "react-icons/go";
import Link from "../Link/Link";
import { IconContext } from "react-icons";
import styleconfig from "../../styles/styleconfig";
import "./Nav.css";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  renderNotExpanded = () => {
    return (
      <div>
        <IconContext.Provider value={{ style: styleconfig.icons.default }}>
          <GoGrabber onClick={this.handleClick} />
        </IconContext.Provider>
      </div>
    );
  };

  renderExpanded = () => {
    return (
      <div>
        <IconContext.Provider value={{ style: styleconfig.icons.default }}>
          <GoChevronDown onClick={this.handleClick} />
        </IconContext.Provider>
        {content.nav.links.map((link) => {
          return (
            <Link
              title={link.title}
              path={`/${link.title.toLowerCase()}`}
            ></Link>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div class="nav">
        {this.state.isExpanded
          ? this.renderExpanded()
          : this.renderNotExpanded()}
      </div>
    );
  }
}

export default Nav;
