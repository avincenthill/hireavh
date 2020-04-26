import React from "react";
import content from "content/content";
import { NavList } from "components/Nav/Nav";
import Page from "components/Page/Page";
import "./NotFound.css";

function NotFound() {
  return (
    <div>
      <Page>
        <h1>{content.notFound.title}</h1>
        <NavList></NavList>
        <hr></hr>
      </Page>
    </div>
  );
}

export default NotFound;
