import React from "react";
import content from "../../content/content.json";
import Link from "../Link/Link";

function NotFound() {
  return (
    <div className="App">
      <h1>{content.notFound.title}</h1>
      <Link path="/" title={content.notFound.subtitle}></Link>
    </div>
  );
}

export default NotFound;
