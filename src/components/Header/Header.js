import './Header.css';
import { Nav } from 'components/Nav/Nav';
import React from 'react';
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch';
import content from 'content/content';
import utils from 'utils/utils';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav isBottom={false}></Nav>
        <a href="/about" className="header-container">
          <div className="header-switch-theme">
            <ToggleSwitch
              id="toggle-switch-theme"
              onChange={() => {
                utils.toggleTheme();
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
