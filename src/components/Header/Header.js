import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css";

function Header() {
  return (
    <div>
      <Nav isBottom={false}></Nav>
      <div className="header-container"></div>
    </div>
  );
}

export default Header;
