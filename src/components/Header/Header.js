import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css";

function Header() {
  return (
    <div>
      <Nav isBottom={false}></Nav>
      <div className="header-container">
        <a href="/">Hire AVH!</a>
      </div>
    </div>
  );
}

export default Header;
