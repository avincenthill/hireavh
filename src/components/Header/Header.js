import React from "react";
import { Nav } from "components/Nav/Nav";
import content from "content/content";
import ToggleSwitch from "components/ToggleSwitch/ToggleSwitch";
import utils from "utils/utils";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav isBottom={false}></Nav>
        <a href="/" className="header-container">
          <div className="header-switch-theme">
            <ToggleSwitch
              id="toggle-switch-theme"
              onChange={() => {
                utils.toggleTheme();
                this.forceUpdate();
              }}
              defaultChecked={utils.isDarkTheme()}
              text={content.header.switchOptions}
            ></ToggleSwitch>
          </div>
          {content.header.title}
        </a>
      </div>
    );
  }
}

export default Header;
