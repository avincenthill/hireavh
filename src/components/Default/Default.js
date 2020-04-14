import React from "react";
// import content from "content/content";
import Page from "components/Page/Page";
import { NavList } from "components/Nav/Nav";
import "./Default.css";

class Default extends React.Component {
  render() {
    return (
      <div>
        <Page>
          <h2 className="default-title">
            Default
          </h2>
          <NavList></NavList>
          <hr></hr>
        </Page>
      </div>
    );
  }
}

export default Default;
