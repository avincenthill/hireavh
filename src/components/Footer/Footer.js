import React from "react";
import content from "../../content/content";
import Nav from "../Nav/Nav";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <Nav isBottom={true}></Nav>
      <a href="/" className="footer-container">
        <span>{content.footer.copywrite}</span>
      </a>
    </div>
  );
}

export default Footer;
