import React from "react";
import content from "../../content/content";
import Nav from "../Nav/Nav";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <Nav isBottom={true}></Nav>
      <div className="footer-container">
        <span>{content.footer.copywrite}</span>
      </div>
    </div>
  );
}

export default Footer;
