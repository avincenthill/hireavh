import React from "react";
import styleconfig from "../../styles/styleconfig";
import { IconContext } from "react-icons";
import "./Link.css";
import { GoChevronRight } from "react-icons/go";

class Link extends React.Component {
  render() {
    return (
      <div>
        <h2>
          <a href={this.props.path}>
            <IconContext.Provider value={{ style: styleconfig.icons.link }}>
              <GoChevronRight></GoChevronRight>
            </IconContext.Provider>
            <span>{this.props.title}</span>
          </a>
        </h2>
      </div>
    );
  }
}

export default Link;
