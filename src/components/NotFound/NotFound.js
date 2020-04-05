import React from "react";
import content from "../../content/content";
import Link from "../Link/Link";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./NotFound.css";

function NotFound() {
  return (
    <div>
      <Header></Header>
      <div className="notfound-container">
        <h1>{content.notFound.title}</h1>
        <Link path="/" title={content.notFound.subtitle}></Link>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default NotFound;
