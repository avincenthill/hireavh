import React from "react";
import content from "../../content/content.json";

function NotFound() {
  return (
    <div className="App">
      <h1>{content.notFound.title}</h1>
      <h2>
        <a href="/">{content.notFound.subtitle}</a>
      </h2>
    </div>
  );
}

export default NotFound;
