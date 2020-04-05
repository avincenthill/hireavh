import React from "react";
import Nav from "../Nav/Nav";
import content from "../../content/content";
import "./Header.css";

function Header() {
  return (
    <div>
      <Nav isBottom={false}></Nav>
      <div className="header-container">
        <a href="/">{content.header.title}</a>
      </div>
    </div>
  );
}

export default Header;
