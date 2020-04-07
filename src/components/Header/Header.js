import React from "react";
import { Nav } from "components/Nav/Nav";
import content from "content/content";
import "./Header.css";

function Header() {
  return (
    <div>
      <Nav isBottom={false}></Nav>
      <a href="/" className="header-container">
        {content.header.title}
      </a>
    </div>
  );
}

export default Header;
