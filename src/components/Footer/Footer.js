import "./Footer.css";
import { Nav } from "components/Nav/Nav";
import React from "react";
import content from "content/content";

function Footer() {
  return (
    <div>
      <Nav isBottom={true}></Nav>
      <a href="/about" className="footer-container">
        <span>{content.footer.copywrite}</span>
      </a>
    </div>
  );
}

export default Footer;
