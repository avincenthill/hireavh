import React from "react";
import content from "../../content/content";
import Link from "../Link/Link";
import Page from "../Page/Page";
import "./NotFound.css";

function NotFound() {
  return (
    <div>
      <Page>
        <h1>{content.notFound.title}</h1>
        <Link path="/" title={content.notFound.subtitle}></Link>
      </Page>
    </div>
  );
}

export default NotFound;
